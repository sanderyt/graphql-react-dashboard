const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const {
  validateRegisterInput,
  validateLoginInput
} = require("../util/validators");
const { SECRET_KEY } = require("../../config");
const User = require("../models/User");

//Function to generate a authentication token
generateToken = user => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
};

module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      //Validate user input when logging in
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      //Check if user exists in MongoDB
      const user = await User.findOne({ username });

      //Check if user does not exist in MongoDB, than throw an error
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      //Check if passwords match from input and MongoDB
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong password";
        throw new UserInputError("Wrong password", { errors });
      }

      //If user is succesfull, create an auth token with function
      const token = generateToken(user);

      //Resolve data
      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      //Validate user data (passwords don't match etc)
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("Errors", {
          errors
        });
      }

      // 1. Make sure user doesn't already exist
      const user = await User.findOne({ username });

      if (user) {
        throw new UserInputError("Username already exists.", {
          errors: {
            username: "This username is already taken."
          }
        });
      }

      //2. Create new user when it does not is taken
      //Create a hashed password with bcryptjs
      password = await bcrypt.hash(password, 12);

      //Create new user based on mongoose user schema
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      //Get response of posting new user with save() from MongoDB
      const res = await newUser.save();

      //Create an authentication token when user is created
      const token = generateToken(res);

      //Return the data from the newly registred user and the auth token
      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};

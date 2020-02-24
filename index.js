const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./backend/schemas");
const resolvers = require("./backend/resolvers");
const { MONGODB } = require("./config.js");

//Apollo server get created here with type defintions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//Connecting to MongoDB database
mongoose
  .connect(MONGODB, {
    useNewUrlParser: true
  })
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  });

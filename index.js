const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require("./backend/types/typeDefs");
const resolvers = require("./backend/resolvers/index");
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

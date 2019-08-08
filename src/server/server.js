const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const path = require("path");
// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const subjects = [
  {
    name: "数学",
    block: "1",
    class: "math",
    credit: 1
  },
  {
    name: "国語",
    block: "2",
    class: "National language",
    credit: 1
  }
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Subject {
    name: String
    block: String
    class: String
    credit: Int
  }

  type Query {
    subjects: [Subject]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    subjects: () => subjects
  }
};
const app = express();
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.static(path.join("./", "dist")));

app.get("/api", (req, res) => {
  res.send({ api: "test" });
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

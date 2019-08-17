const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const path = require("path");
// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const subjects = [
  {
    name: "国語",
    block: "I_A",
    class: "国語",
    credit: 1
  },
  {
    name: "数学",
    block: "I_A",
    class: "数学",
    credit: 1
  },
  {
    name: "社会",
    block: "I_A",
    class: "社会",
    credit: 1
  },
  {
    name: "理科",
    block: "I_A",
    class: "理科",
    credit: 1
  },
  {
    name: "英語",
    block: "I_A",
    class: "英語",
    credit: 1
  },
  {
    name: "国語",
    block: "I_B",
    class: "国語",
    credit: 1
  },
  {
    name: "数学",
    block: "I_B",
    class: "数学",
    credit: 1
  },
  {
    name: "社会",
    block: "I_B",
    class: "社会",
    credit: 1
  },
  {
    name: "理科",
    block: "I_B",
    class: "理科",
    credit: 1
  },
  {
    name: "英語",
    block: "I_B",
    class: "英語",
    credit: 1
  },
  {
    name: "国語",
    block: "II_A",
    class: "国語",
    credit: 1
  },
  {
    name: "数学",
    block: "II_A",
    class: "数学",
    credit: 1
  },
  {
    name: "社会",
    block: "II_A",
    class: "社会",
    credit: 1
  },
  {
    name: "理科",
    block: "II_A",
    class: "理科",
    credit: 1
  },
  {
    name: "英語",
    block: "II_A",
    class: "英語",
    credit: 1
  },
  {
    name: "国語",
    block: "II_B",
    class: "国語",
    credit: 1
  },
  {
    name: "数学",
    block: "II_B",
    class: "数学",
    credit: 1
  },
  {
    name: "社会",
    block: "II_B",
    class: "社会",
    credit: 1
  },
  {
    name: "理科",
    block: "II_B",
    class: "理科",
    credit: 1
  },
  {
    name: "英語",
    block: "II_B",
    class: "英語",
    credit: 1
  },
  {
    name: "国語",
    block: "III_A",
    class: "国語",
    credit: 1
  },
  {
    name: "数学",
    block: "III_A",
    class: "数学",
    credit: 1
  },
  {
    name: "社会",
    block: "III_A",
    class: "社会",
    credit: 1
  },
  {
    name: "理科",
    block: "III_A",
    class: "理科",
    credit: 1
  },
  {
    name: "英語",
    block: "III_A",
    class: "英語",
    credit: 1
  },
  {
    name: "道徳",
    block: "III_B",
    class: "国語",
    credit: 1
  },
  {
    name: "道徳",
    block: "III_B",
    class: "数学",
    credit: 1
  },
  {
    name: "道徳",
    block: "III_B",
    class: "社会",
    credit: 1
  },
  {
    name: "道徳",
    block: "III_B",
    class: "理科",
    credit: 1
  },
  {
    name: "道徳",
    block: "III_B",
    class: "英語",
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
    subjects: [Subject]!
    searchSubjectsByBlock(block: String): [Subject]
    searchSubjectsByName(name: String): [Subject]
    searchSubjectsByClass(class: String): [Subject]
    searchSubjectsByCredit(credit: String): [Subject]
    searchSubject(
      name: String
      block: String
      class: String
      credit: Int
    ): [Subject]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    subjects: () => subjects,
    searchSubjectsByBlock: (_, args) => {
      console.log(args.block);
      return subjects.filter(subject => {
        return subject.block === args.block;
      });
    },
    searchSubjectsByName: (_, args) => {
      console.log(args.name);
      return subjects.filter(subject => {
        return subject.name === args.name;
      });
    },
    searchSubjectsByClass: (_, args) => {
      console.log(args.class);
      return subjects.filter(subject => {
        return subject.class === args.class;
      });
    },
    searchSubjectsByCredit: (_, args) => {
      console.log(args.credit);
      return subjects.filter(subject => {
        return subject.credit === args.credit;
      });
    },
    searchSubject: (_, args) => {
      let filteredSubjects = subjects;
      if (args.name) {
        console.log("args.name", args.name);
        filteredSubjects = filteredSubjects.filter(subject => {
          return subject.name === args.name;
        });
        console.log("filteredSubject", filteredSubjects);
      }
      if (args.block) {
        console.log("args.block", args.block);
        filteredSubjects = filteredSubjects.filter(subject => {
          return subject.block === args.block;
        });
        console.log("filteredSubject", filteredSubjects);
      }
      if (args.class) {
        console.log("args.class", args.class);
        filteredSubjects = filteredSubjects.filter(subject => {
          return subject.class === args.class;
        });
        console.log("filteredSubject", filteredSubjects);
      }
      if (args.credit) {
        console.log("args.credit", args.credit);
        filteredSubjects.filter(subject => {
          return subject.credit === args.credit;
        });
        console.log("filteredSubject", filteredSubjects);
      }
      return filteredSubjects;
    }
  }
};
const app = express();
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

app.get("/api", (req, res) => {
  res.send({ api: "test" });
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

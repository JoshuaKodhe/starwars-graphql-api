const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    peopleForHome: People!
  }

  type People {
    count: Int
    next: String
    previous: String
    result: [Person]
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
`;

module.exports = typeDefs;

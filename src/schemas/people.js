const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    peopleForHome(page: Int): People!
    personByName(name: String): Person
  }

  type People {
    count: Int
    next: String
    previous: String
    results: [Person]
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: Homeworld
  }

  type Homeworld {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
  }
`;

module.exports = typeDefs;

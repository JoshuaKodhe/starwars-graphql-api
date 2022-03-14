const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/people');
const resolvers = require('./resolvers/people');
const PersonAPI = require('./dataSources/person-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    personAPI: new PersonAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});

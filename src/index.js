const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/people');
const resolvers = require('./resolvers/people');
const PersonAPI = require('./dataSources/person-api');

async function startServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      personAPI: new PersonAPI(),
    }),
  });

  const { url, port } = await server.listen({
      port: process.env.PORT || 4000
  });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startServer(typeDefs, resolvers);

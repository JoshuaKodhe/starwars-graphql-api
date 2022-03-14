import { ApolloServer } from 'apollo-server';
import typeDefs from './schemas/people';
import resolvers from './resolvers/people';
import PersonAPI from './dataSources/person-api';

async function startServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      personAPI: new PersonAPI(),
    }),
  });

  const { url, port } = await server.listen({
    port: process.env.PORT || 4000,
  });
  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startServer(typeDefs, resolvers);

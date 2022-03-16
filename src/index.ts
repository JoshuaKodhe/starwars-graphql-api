import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas/people';
import resolvers from './resolvers/people';
import PersonAPI from './dataSources/person-api';

import express from 'express';
import cors from 'cors';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    personAPI: new PersonAPI(),
  }),
});

const PORT = process.env.PORT || 4000;

app.use('*', cors());
server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`);
  });
});

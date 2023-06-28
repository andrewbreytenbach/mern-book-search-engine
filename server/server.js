const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/schemas');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloClient, InMemoryCache } = require('@apollo/client');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

async function startApolloServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app, path: '/graphql' });

  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.use(routes);

  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
}

startApolloServer().catch((err) => console.error(err));

const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas'); // import typeDefs and resolvers
const db = require('./config/connection');
const routes = require('./routes');

async function startApolloServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;

  // Apollo Server setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }), // Provide access to the request object in the context
  });

  await server.start();

  // Apply Apollo Server middleware before other middleware and routes
  server.applyMiddleware({ app });

  // Middleware and routes
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.use(routes);

  // Connect to the database and start the server
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
}

startApolloServer().catch((err) => console.error(err));

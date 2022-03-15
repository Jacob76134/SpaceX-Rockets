// const { ApolloServer } = require('apollo-server-express');
// const express = require('express');
// const path = require('path');
// const cors = require("cors");

// const { typeDefs, resolvers} = require('./schemas')

// const app = express();


// async function startApolloServer(typeDefs, resolvers){
//   const server = new ApolloServer({typeDefs, resolvers})
//   const app = express();
//   await server.start();
//   server.applyMiddleware({app, path: '/graphql'});
// }

// startApolloServer(typeDefs, resolvers);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// app.listen(4000, () => {
//   console.log(`
//     Server is running!
//     Listening on port 4000
//     Explore at http://localhost:4000/graphql
//   `);
// });
const { ApolloServer } =  require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const {typeDefs, resolvers} = require('./schemas')
const port = process.env.PORT || 4000


async function startApolloServer(typeDefs, resolvers) {

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
const path = require("path");


const app = express();
startApolloServer(typeDefs, resolvers);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "build")));
app.get("/", function (request, response) {
  response.sendFile(path.resolve(__dirname, "build", "index.html"));
});
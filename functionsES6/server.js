import express from "express";
import admin from "firebase-admin";
import { ApolloServer } from "apollo-server-express";
import serviceAccount from "./reviewbook-server-firebase-adminsdk.json";
import cors from "cors";
import { typeDefs, resolvers } from "./config/apolloServer";
import UserDS from "./dataSource/user";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reviewbook-server.firebaseio.com",
});
const configureServer = () => {
  const app = express();
  app.use(cors());
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => ({
      req,
      res,
      userDS: new UserDS(admin),
    }),
  });
  server.applyMiddleware({ app });
  // finally return the application
  return app;
};

export default configureServer;

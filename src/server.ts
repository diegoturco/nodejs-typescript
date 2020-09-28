import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import { UserResolver } from "./resolvers/UserResolver";
import { Container } from "typedi";

(async () => {
  const app = express();

  const mongoose = await connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});
  await mongoose.connection;

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      container: Container,
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("express server started");
  });
})();
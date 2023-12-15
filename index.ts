import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import schema from './schema';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/_ping', (req, res) => {
  res.send('pong');
});

const port = process.env.PORT || 4000;

const server = new ApolloServer({ schema });

// https://stackoverflow.com/a/70165328
server.start().then(res => {
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port }, () => 
    console.log(`Gateway API running at port: ${port}`)
  );  
});
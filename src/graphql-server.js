'use strict';

import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import { schema } from './data/schema';
import { API_URL, GRAPHQL_PORT } from './common/constants';

// Expose a GraphQL endpoint
const graphQLServer = express();
graphQLServer.use('/', graphQLHTTP({schema, pretty: true}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

export const proxy = {[API_URL]: `http://localhost:${GRAPHQL_PORT}`}
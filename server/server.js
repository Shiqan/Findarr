const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

// const findarr = require('./findarr');
const schema = require('./schema.js');

const app = express();
app.use(cors())

// app.use('/', findarr);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

module.exports = app;
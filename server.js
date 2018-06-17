const express = require('express');
const bodyParser = require('body-parser');
const gqlExpress = require('graphql-server-express');

const findarr = require('./findarr');
const schema = require('./schema.js');

const app = express();

app.use('/', findarr);
app.use('/graphiql', gqlExpress.graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyParser.json(), gqlExpress.graphqlExpress({ schema: schema }));

module.exports = app;
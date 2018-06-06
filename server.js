const path = require('path')
import express from 'express';
const engine = require('ejs-locals');
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

const schema = require('./schema.js');

const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
  });

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

export default app;
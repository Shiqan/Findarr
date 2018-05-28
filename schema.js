require('dotenv').config();

const graphql = require('graphql');

var Promise = require("bluebird");
var MovieDB = Promise.promisifyAll(require('moviedb')(''));

const Movies = [
    {
      id: '8dlx7ak38fd39dv79ad', 
      title: 'Black Panther',
    },
    {
      id: 'jd3kd03d0w9a0l35rh74', 
      title: 'Infinity War',
    },
    {
      id: '0hy894hf0dlkfh9oinv', 
      title: 'Ready Player One',
    }
];

const MovieType = new graphql.GraphQLObjectType({
  name: "Movie",
  description: "This represent a movie",
  fields: () => ({
    id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
    title: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
  })
});

const QueryRootType = new graphql.GraphQLObjectType({
    name: 'QueryRootSchema',
    description: "Schema Query Root",
    fields: () => ({
      movies: {
        type: new graphql.GraphQLList(MovieType),
        description: "List of all Movies",
        resolve: function() {
          return MovieDB.miscLatestMoviesAsync().then(function(res) {
            console.log(res);
            console.log(res != undefined);
            if (res != undefined)
              return [{
                id: res.id,
                title: res.title,
              }];
          });
        }
      }
    })
  });

  
const Schema = new graphql.GraphQLSchema({
  query: QueryRootType 
  // mutation: MutationRootType 
});

module.exports = Schema;
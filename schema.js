const graphql = require('graphql');
const Promise = require("bluebird");
const MovieDB = Promise.promisifyAll(require('moviedb')(process.env.TMDB_API_KEY));

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
          return MovieDB.miscUpcomingMoviesAsync().then(function(res) {
            console.log(res.results != undefined);
            if (res.results != undefined)
              return res.results.map( ( item ) => {
                return { id: item.id,  title: item.title }
              });
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
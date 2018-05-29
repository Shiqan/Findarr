const graphql = require('graphql');

const MovieType = require('./tmdb/movie');
const MovieResolver = require('./tmdb/movie_resolver');

const QueryRootType = new graphql.GraphQLObjectType({
  name: 'QueryRootSchema',
  description: "Schema Query Root",
  fields: () => ({
    movies: {
      type: new graphql.GraphQLList(MovieType),
      description: "List of all upcoming Movies",
      resolve: MovieResolver
    }
  })
});

const Schema = new graphql.GraphQLSchema({
  query: QueryRootType 
  // mutation: MutationRootType 
});

module.exports = Schema;
const graphql = require('graphql');

const MovieType = require('./tmdb/movie');
const UpcomingMovieResolver = require('./tmdb/upcoming_movie_resolver');
const PopularMovieResolver = require('./tmdb/popular_movie_resolver');

const TrailerType = require('./tmdb/trailer');
const TrailerResolver = require('./tmdb/trailer_resolver');

const QueryRootType = new graphql.GraphQLObjectType({
  name: 'QueryRootSchema',
  description: "Schema Query Root",
  fields: () => ({
    upcoming_movies: {
      type: new graphql.GraphQLList(MovieType),
      description: "List of all upcoming Movies",
      resolve: UpcomingMovieResolver
    },
    popular_movies: {
      type: new graphql.GraphQLList(MovieType),
      description: "List of all popular Movies",
      resolve: PopularMovieResolver
    },
    trailers: {
      type: new graphql.GraphQLList(TrailerType),
      description: "Get trailer of a movie",
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: TrailerResolver
    }
  })
});

const Schema = new graphql.GraphQLSchema({
  query: QueryRootType 
  // mutation: MutationRootType 
});

module.exports = Schema;
const graphql = require('graphql');

const MovieType = require('./tmdb/movie');
const MovieResolver = require('./tmdb/movie_resolver');
const UpcomingMovieResolver = require('./tmdb/upcoming_movie_resolver');
const PopularMovieResolver = require('./tmdb/popular_movie_resolver');
const NowPlayingMovieResolver = require('./tmdb/now_playing_movie_resolver');

const TrailerType = require('./tmdb/trailer');
const TrailerResolver = require('./tmdb/trailer_resolver');

const ConfigurationType = require('./tmdb/configuration');
const ConfigurationResolver = require('./tmdb/configuration_resolver');

const AddMovieResolver = require('./radarr/add_movie_resolver');
const ProfileType = require('./radarr/profile');
const ProfileIdResolver = require('./radarr/profile_id_resolver');

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
    now_playing_movies: {
      type: new graphql.GraphQLList(MovieType),
      description: "List of now playing Movies",
      resolve: NowPlayingMovieResolver
    },
    movie: {
      type: MovieType,
      description: "Get details of a movie",
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: MovieResolver
    },
    trailers: {
      type: new graphql.GraphQLList(TrailerType),
      description: "Get trailer of a movie",
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: TrailerResolver
    },
    profiles: {
      type: new graphql.GraphQLList(ProfileType),
      description: "List Radarr Profiles",
      args: {
        name: { type: graphql.GraphQLString }
      },
      resolve: ProfileIdResolver
    },
    configuration: {
      type: ConfigurationType,
      description: "Get tmdb configuration",
      resolve: ConfigurationResolver
    }
  })
});

const MutationRootType = new graphql.GraphQLObjectType({
  name: 'MutationRootSchema',
  description: 'Schema Mutation Root',
  fields: () => ({
    add_movie: {
      type: MovieType,
      description: "Add movie to Radarr",
      args: {
        id: { type: graphql.GraphQLInt },
        profileId: { type: graphql.GraphQLInt },
      },
      resolve: AddMovieResolver
    }
  })
})

const Schema = new graphql.GraphQLSchema({
  query: QueryRootType,
  mutation: MutationRootType 
});

module.exports = Schema;
const graphql = require('graphql');
const TrailerType = require('./trailer');
const TrailerResolver = require('./trailer_resolver');

const GenreType = new graphql.GraphQLObjectType({
  name: 'Genre',
  description: 'genre type',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
  })
});


const Movie = new graphql.GraphQLObjectType({
  name: 'Movie',
  description: 'movie type',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    overview: { type: graphql.GraphQLString },
    popularity: { type: graphql.GraphQLFloat },
    poster_path: { type: graphql.GraphQLString },
    release_date: { type: graphql.GraphQLString },
    tagline: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    adult: { type: graphql.GraphQLBoolean },
    video: { type: graphql.GraphQLBoolean },
    vote_average: { type: graphql.GraphQLFloat },
    vote_count: { type: graphql.GraphQLInt },
    original_language: { type: graphql.GraphQLString },
    original_title: { type: graphql.GraphQLString },
    backdrop_path: { type: graphql.GraphQLString },
    genres: { type: new graphql.GraphQLList(GenreType) },
    videos: {
      type: new graphql.GraphQLList(TrailerType),
      resolve: TrailerResolver
    },
  })
});

module.exports = Movie;
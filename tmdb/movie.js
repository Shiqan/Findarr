const graphql = require('graphql');

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

  })
});

module.exports = Movie;
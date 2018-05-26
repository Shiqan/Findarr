const graphql = require('graphql');

const Movie = new graphql.GraphQLObjectType({
  name: 'Movie',
  description: 'movie type',
  fields: {
    id: { type: graphql.GraphQLID },
    imdb_id: { type: graphql.GraphQLID },
    overview: { type: graphql.GraphQLString },
    popularity: { type: graphql.GraphQLFloat },
    poster_path: { type: graphql.GraphQLString },
    release_date: { type: graphql.GraphQLString },
    tagline: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    video: { type: graphql.GraphQLBoolean },
    vote_average: { type: graphql.GraphQLFloat },
    vote_count: { type: graphql.GraphQLInt }
  }
});

export default () => [Movie];

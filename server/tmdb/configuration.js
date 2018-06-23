const graphql = require('graphql');


// { images:
//     { base_url: 'http://image.tmdb.org/t/p/',
//       secure_base_url: 'https://image.tmdb.org/t/p/',
//       backdrop_sizes: [ 'w300', 'w780', 'w1280', 'original' ],
//       logo_sizes: [ 'w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original' ],
//       poster_sizes:
//        [ 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original' ],
//       profile_sizes: [ 'w45', 'w185', 'h632', 'original' ],
//       still_sizes: [ 'w92', 'w185', 'w300', 'original' ] },
//    change_keys:
//     [ 'adult',
//       'air_date',
//       'also_known_as',
//       'alternative_titles',
//       'biography',
//       'birthday',
//       'budget',
//       'cast',
//       'certifications',
//       'character_names',
//       'created_by',
//       'crew',
//       'deathday',
//       'episode',
//       'episode_number',
//       'episode_run_time',
//       'freebase_id',
//       'freebase_mid',
//       'general',
//       'genres',
//       'guest_stars',
//       'homepage',
//       'images',
//       'imdb_id',
//       'languages',
//       'name',
//       'network',
//       'origin_country',
//       'original_name',
//       'original_title',
//       'overview',
//       'parts',
//       'place_of_birth',
//       'plot_keywords',
//       'production_code',
//       'production_companies',
//       'production_countries',
//       'releases',
//       'revenue',
//       'runtime',
//       'season',
//       'season_number',
//       'season_regular',
//       'spoken_languages',
//       'status',
//       'tagline',
//       'title',
//       'translations',
//       'tvdb_id',
//       'tvrage_id',
//       'type',
//       'video',
//       'videos' ] }
const ImageType = new graphql.GraphQLObjectType({
  name: 'Image',
  description: 'tmdb image configuration',
  fields: () => ({
    base_url: { type: graphql.GraphQLString },
    secure_base_url: { type: graphql.GraphQLString },
    backdrop_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    logo_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    poster_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    profile_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    still_sizes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  })
});


const Configuration = new graphql.GraphQLObjectType({
  name: 'Configuration',
  description: 'tmdb configuration',
  fields: () => ({
    images: { type: ImageType },
    change_keys: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  })
});

module.exports = Configuration;
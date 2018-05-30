const graphql = require('graphql');

// { id: 383498,
//   quicktime: [],
//   youtube:
//    [ { name: 'No Good Deed',
//        size: 'HD',
//        source: 'Z5ezsReZcxU',
//        type: 'Featurette' },
//      { name: 'Deadpool 2 | Official HD  Deadpool\'s "Wet on Wet" Teaser | 2018',
//        size: 'HD',
//        source: '2-5Wv9UGkN8',
//        type: 'Teaser' },
//      { name: 'Deadpool, Meet Cable',
//        size: 'HD',
//        source: 'xZNBFcwd7zc',
//        type: 'Teaser' },
//      { name: 'Deadpool 2 | The Trailer',
//        size: 'HD',
//        source: 'D86RtevtfrA',
//        type: 'Trailer' },
//      { name: 'Deadpool 2: The Final Trailer',
//        size: 'HD',
//        source: '20bpjtCbCz0',
//        type: 'Trailer' },
//      { name: 'A Very Special Message from Deadpool',
//        size: 'HD',
//        source: 'bI31WqFDxNs',
//        type: 'Teaser' } ] }

const Trailer = new graphql.GraphQLObjectType({
  name: 'Trailer',
  description: 'trailer type',
  fields: () => ({
    name: { type: graphql.GraphQLString },
    size: { type: graphql.GraphQLString },
    source: { type: graphql.GraphQLString },
    type: { type: graphql.GraphQLString }
  })
});

module.exports = Trailer;
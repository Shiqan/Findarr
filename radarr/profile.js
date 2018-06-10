const graphql = require('graphql');
const QualityType = require('./quality');

const Profile = new graphql.GraphQLObjectType({
  name: 'Profile',
  description: 'Radarr quality profiles',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    cutoff: { type: graphql.GraphQLString },
    preferredTags: { type: graphql.GraphQLString },
    language: { type: graphql.GraphQLString },
    items: { type: new graphql.GraphQLList(QualityType) },
  })
});

module.exports = Profile;
const graphql = require('graphql');

const Quality = new graphql.GraphQLObjectType({
  name: 'Quality',
  description: 'Radarr quality profile',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
  })
});

const QualityItem = new graphql.GraphQLObjectType({
  name: 'QualityItem',
  description: 'Radarr quality profile setting',
  fields: () => ({
    quality: { type: Quality },
    allowed: { type: graphql.GraphQLString },
  })
});

module.exports = QualityItem;
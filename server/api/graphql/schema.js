const {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} = require('graphql-tools');

const { resolvers } = require('./resolvers');

const typeDefs = `
type Activity {
  id: ID!                # "!" denotes a required field
  code: String
  type: String,
  owner: String
  timeStarted: String
  state: String
  metrics: String
  build: String
  unitTest: String
  functionalTest: String
  detail: [ActivityDetail]!
}
type ActivityDetail {
  id: ID!
  text: String
}

# This type specifies the entry points into our API
type Query {
  activities: [Activity]    # "[]" means this is a list of channels
  activityDetail(id: ID!): ActivityDetail
}

`;

// console.log(` resolvers >> ${resolvers}`);

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });
module.exports = { schema };

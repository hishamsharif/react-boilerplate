const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const { schema } = require('../api/graphql/schema');
const cors = require('cors');

// console.log(schema);

module.exports = function addGraphQLMiddlewares(expressApp) {
  // expressApp.use('*', cors());
  expressApp.use('*', cors({ origin: 'http://localhost:3000' }));
  expressApp.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema,
    })
  );

  expressApp.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    })
  );
};

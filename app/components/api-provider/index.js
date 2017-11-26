import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'; // HttpLink
import { InMemoryCache } from 'apollo-cache-inmemory';

import fetch from 'unfetch';

const link = createHttpLink({ uri: '/graphql', fetch });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// eslint-disable-next-line react/prefer-stateless-function
class ApiProvider extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}
ApiProvider.propTypes = {
  children: PropTypes.element,
};

export default ApiProvider;

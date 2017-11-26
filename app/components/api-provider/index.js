import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http'; // createHttpLink
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'whatwg-fetch';

const link = new HttpLink(); // createHttpLink({ uri: '/graphql', fetch }); // new HttpLink(); //

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// eslint-disable-next-line react/prefer-stateless-function
class ApiProvider extends React.Component {
  render() {
    const aclient = this.props.apolloClient || client;
    return (
      <ApolloProvider client={aclient}>{this.props.children}</ApolloProvider>
    );
  }
}
ApiProvider.propTypes = {
  children: PropTypes.element,
};

export default ApiProvider;

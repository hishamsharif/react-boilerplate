import React from 'react';
// import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
// import fetch from 'isomorphic-fetch';
// import 'whatwg-fetch';
import fetch from 'isomorphic-fetch';

export function graphQLFetcher(graphQLParams) {
  return fetch(`${window.location.origin}/graphql`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
    credentials: 'same-origin',
  }).then((response) => response.json());
}

export default () => <GraphiQL fetcher={graphQLFetcher} />;

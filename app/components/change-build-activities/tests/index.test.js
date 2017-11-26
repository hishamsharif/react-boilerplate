import React from 'react';
import { mount } from 'enzyme';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'; // HttpLink
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'whatwg-fetch';

import ApiProvider from '../../api-provider/index';
import ChangeBuildActivities from '../index';
import { listAllActivities } from '../services/list-activities';

const link = createHttpLink({ uri: '/graphql', fetch }); // new HttpLink(); //

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

describe('<ChangeBuildActivities />', () => {
  const allActivitiesData = listAllActivities();
  it('should all activities from api backend', () => {
    const mounted = mount(
      <ApiProvider apolloClient={client}>
        <ChangeBuildActivities />
      </ApiProvider>
    );

    let loading = mounted.find('ChangeOrBuildActivities').props().loading;
    const asyncExpect = () => {
      loading = mounted.find('ChangeOrBuildActivities').props().loading;
      if (!loading) {
        expect(
          mounted.find('ActivitiesView').prop('allActivitiesData')
        ).toEqual(allActivitiesData);
      }
    };

    while (!loading) {
      setTimeout(asyncExpect, 1000);
    }
  });
});

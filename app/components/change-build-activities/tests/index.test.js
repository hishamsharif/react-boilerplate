// import React from 'react';
// import { shallow } from 'enzyme';

// import { BuildActivities } from '../index';

import React from 'react';
import { mount } from 'enzyme';

import ApiProvider from '../../api-provider/index';
import ChangeBuildActivities from '../index';
import { listAllActivities } from '../services/list-activities';

describe('<ChangeBuildActivities />', () => {
  const allActivitiesData = listAllActivities();
  it('should all activities from api backend', () => {
    const mounted = mount(
      <ApiProvider>
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

// import React from 'react';
// import { shallow } from 'enzyme';

// import { BuildActivities } from '../index';

import React from 'react';
import { mount, shallow } from 'enzyme';

import ChangeBuildActivities from '../index';
import { listAllActivities } from '../services/list-activities';

describe('<ChangeBuildActivities />', () => {
  const allActivitiesData = listAllActivities();
  it('should render some routes', () => {
    const renderedComponent = shallow(<ChangeBuildActivities />);
    expect(renderedComponent.find('ActivitiesView').length).not.toBe(0);

    const mounted = mount(<ChangeBuildActivities />);
    expect(mounted.find('ActivitiesView').prop('allActivitiesData')).toEqual(
      allActivitiesData
    );
  });
});

// import React from 'react';
// import { shallow } from 'enzyme';

// import { BuildActivities } from '../index';

import React from 'react';
import { shallow } from 'enzyme';

import BuildActivities from '../index';

describe('<BuildActivities />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<BuildActivities />);
    expect(renderedComponent.find('div').length).not.toBe(0);
  });
});

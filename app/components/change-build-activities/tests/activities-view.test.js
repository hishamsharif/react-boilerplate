import React from 'react';
import { mount, shallow } from 'enzyme';

import ActivitiesView from '../views/activities-view';
import { listAllActivities } from '../services/list-activities';

describe('<ActivitiesView />', () => {
  let props;
  let renderedComponent;
  let mountedComponent;
  const activitiesView = () => {
    if (!renderedComponent) {
      renderedComponent = shallow(<ActivitiesView {...props} />);
    }
    if (!mountedComponent) {
      mountedComponent = mount(<ActivitiesView {...props} />);
    }
    return {
      renderedComponent,
      mountedComponent,
    };
  };

  beforeEach(() => {
    props = {
      allActivitiesData: listAllActivities(),
      listActivityDetailById: jest.fn(),
      selectedActivity: { id: '123', detail: 'metrics details' },
    };
    renderedComponent = undefined;
    mountedComponent = undefined;
    activitiesView();
  });

  describe('<ListView />', () => {
    it('should render the activity list', () => {
      expect(renderedComponent.find('ListView').length).not.toBe(0);
    });

    it('should the rendered activity list equal to input activities data', () => {
      expect(mountedComponent.find('ListView').prop('rowsData')).toEqual(
        props.allActivitiesData
      );
    });
  });
});

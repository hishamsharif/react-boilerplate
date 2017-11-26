import React from 'react';
import { mount, shallow } from 'enzyme';

import ListView from '../view/list-view/index';
// import RowHeaders from '../views/list-view/row-headers';
import { listAllActivities } from '../services/list-activities';
import columnsDisplayOptions from '../view/columns-display-options';
import rowsDisplayOptions from '../view/rows-display-options';

describe('<ListView />', () => {
  let props;
  let renderedComponent;
  let mountedComponent;
  const listView = () => {
    if (!renderedComponent) {
      renderedComponent = shallow(<ListView {...props} />);
    }
    if (!mountedComponent) {
      mountedComponent = mount(<ListView {...props} />);
    }
    return {
      renderedComponent,
      mountedComponent,
    };
  };

  beforeEach(() => {
    props = {
      columnsOptions: columnsDisplayOptions,
      rowsOptions: rowsDisplayOptions,
      rowsData: listAllActivities(),
      listActivityDetailById: jest.fn(),
      selectedActivity: { id: '123', detail: 'metrics details' },
    };
    renderedComponent = undefined;
    mountedComponent = undefined;
    listView();
  });

  describe('<ListView />', () => {
    it('should have recieved the list of activities rowsData', () => {
      expect(mountedComponent.at(0).props().rowsData).toEqual(props.rowsData);
    });

    it('should have rendered the rows for each item in the list of activities rowsData', () => {
      // console.log(mountedComponent.debug());
      expect(mountedComponent.find('ListOfRows').length).toBe(
        props.rowsData.length
      );
    });
  });
});

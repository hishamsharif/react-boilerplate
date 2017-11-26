import React from 'react';
import PropTypes from 'prop-types';

import ListView from './list-view/index';
import columnsDisplayOptions from './columns-display-options';
import rowsDisplayOptions from './rows-display-options';

// eslint-disable-next-line react/prefer-stateless-function
class ActivitiesView extends React.Component {
  render() {
    return (
      <ListView
        columnsOptions={columnsDisplayOptions}
        rowsOptions={rowsDisplayOptions}
        rowsData={this.props.allActivitiesData}
        listActivityDetailById={this.props.listActivityDetailById}
      />
    );
  }
}

ActivitiesView.propTypes = {
  allActivitiesData: PropTypes.array,
  listActivityDetailById: PropTypes.func,
};

export default ActivitiesView;

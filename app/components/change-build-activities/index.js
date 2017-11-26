/**
 *
 * ChangeOrBuildActivities
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import ActivitiesView from './view/index';
import {
  listActivityDetailById,
  activitiesListQuery,
  activitiesListResultsToProps,
} from './services/list-activities';

// eslint-disable-next-line react/prefer-stateless-function
export class ChangeOrBuildActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedActivity: {} };
    this.listDetailById = this.listDetailById.bind(this);
  }

  listDetailById(id) {
    // console.log(`id >> ${id}`);
    const activity = listActivityDetailById(id);
    this.setState({ selectedActivity: activity });
  }

  render() {
    const { loading, error, allActivitiesData } = this.props;
    // eslint-disable-next-line no-nested-ternary
    return loading ? (
      <div> Loading... </div>
    ) : error ? (
      <div> Error... {error}</div>
    ) : (
      <div>
        <ActivitiesView
          allActivitiesData={allActivitiesData}
          selectedActivity={this.state.selectedActivity}
          listActivityDetailById={this.listDetailById}
        />
      </div>
    );
  }
}

ChangeOrBuildActivities.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  allActivitiesData: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default graphql(activitiesListQuery, activitiesListResultsToProps)(
  ChangeOrBuildActivities
);

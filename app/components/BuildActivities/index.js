/**
 *
 * BuildActivities
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/*
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBuildActivities from './selectors';
import reducer from './reducer';
import saga from './saga';
*/

// eslint-disable-next-line react/prefer-stateless-function
export default class BuildActivities extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

/*
BuildActivities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  buildactivities: makeSelectBuildActivities(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'buildActivities', reducer });
const withSaga = injectSaga({ key: 'buildActivities', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BuildActivities);
*/

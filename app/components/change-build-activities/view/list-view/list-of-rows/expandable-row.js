import React from 'react';
import PropTypes from 'prop-types';

import StyledExpandedRow from './styles/expanded-row';

// eslint-disable-next-line react/prefer-stateless-function
class ExpandedRow extends React.Component {
  render() {
    const { rowData, selectedRowId } = this.props;

    return (
      <StyledExpandedRow thisRowId={rowData.code} selectedRowId={selectedRowId}>
        <div className="col-md-6">one</div>
        <div className="col-md-6">two</div>
      </StyledExpandedRow>
    );
  }
}

ExpandedRow.propTypes = {
  selectedRowId: PropTypes.string,
  rowData: PropTypes.object,
};

export default ExpandedRow;

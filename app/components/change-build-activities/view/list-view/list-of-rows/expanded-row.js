import React from 'react';

import StyledExpandedRow from './styles/expanded-row';

export default class ExpandedRow extends React.Component {
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

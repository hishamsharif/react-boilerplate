import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import StyledListView from './styles';
import ListHeaders from './headers/index';
import ListOfRows from './list-of-rows/index';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanding: false,
      selectedRowId: undefined,
    };
    this.expandRow = this.expandRow.bind(this);
  }

  onSelectedRow(row) {
    // console.log(`row4 selected >> ${row.code}`);
    if (row.expandable) this.expandRow(row.code);
  }

  expandRow(rowId) {
    const isExpanding = this.state.selectedRowId !== rowId;
    const selectedRowId = isExpanding ? rowId : '';

    this.setState({ selectedRowId, isExpanding }, () => {
      // console.log(`row id >> ${this.state.selectedRowID}`);
    });
  }

  render() {
    const { columnsOptions, rowsData, rowsOptions } = this.props;

    return (
      <StyledListView>
        <ListHeaders columnsOptions={columnsOptions} />

        {rowsData &&
          rowsData.map((row) => (
            <ListOfRows
              key={`${row.code}`}
              id={row.code}
              columnsOptions={columnsOptions}
              rowsOptions={rowsOptions}
              rowData={row}
              selectedRowId={this.state.selectedRowId}
              // eslint-disable-next-line react/jsx-no-bind
              onSelectedRow={() => this.onSelectedRow(row)}
            />
          ))}
      </StyledListView>
    );
  }
}

ListView.propTypes = {
  rowsData: PropTypes.array,
  rowsOptions: PropTypes.object,
  columnsOptions: PropTypes.array,
  // eslint-disable-next-line react/no-unused-prop-types
  listActivityDetailById: PropTypes.func,
};

export default ListView;

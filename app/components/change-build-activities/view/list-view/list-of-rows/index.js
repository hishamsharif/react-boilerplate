import React from 'react';
import PropTypes from 'prop-types';

import StyledListOfRows from './styles/index';
import StyledExpandableRow from './styles/expandable-row';
// import StyledExpandedRow from './styles/expanded-row';

import ExpandedRow from './expanded-row';

const ListOfRows = ({
  columnsOptions,
  rowsOptions,
  rowData,
  onSelectedRow,
  selectedRowId,
}) => (
  <StyledListOfRows
    borderColor={rowsOptions.rowColor(rowData).borderColor}
    bgColor={rowsOptions.rowColor(rowData).bgColor}
  >
    <div className="col">
      <StyledExpandableRow onClick={onSelectedRow}>
        {columnsOptions.map((col) => (
          <div className={col.style} key={col.accessor}>
            {col.customComponent
              ? col.customComponent(rowData[col.accessor])
              : rowData[col.accessor]}
          </div>
        ))}
      </StyledExpandableRow>

      <ExpandedRow
        rowData={rowData}
        selectedRowId={selectedRowId}
        key={`${rowData.code}-expanded`}
      />
    </div>
  </StyledListOfRows>
);

ListOfRows.propTypes = {
  columnsOptions: PropTypes.array,
  rowsOptions: PropTypes.object,
  rowData: PropTypes.object,
  onSelectedRow: PropTypes.func,
  selectedRowId: PropTypes.string,
};

export default ListOfRows;

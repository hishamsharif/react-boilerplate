import styled from 'styled-components';
import StyledExpandableRow from './expandable-row';

const StyledExpandedRow = StyledExpandableRow.extend.attrs({
  className: (props) =>
    props.thisRowId == props.selectedRowId
      ? 'row collapse.show '
      : 'row collapse ',
})`
  border: 0px solid yellow;
`;

export default StyledExpandedRow;

import React from 'react';
import PropTypes from 'prop-types';

import StyledHeaders from './styles';

const ListHeaders = ({ columnsOptions }) => (
  <StyledHeaders borderColor="white">
    {columnsOptions.map((col) => (
      <div className={col.style} key={col.accessor}>
        {col.name}
      </div>
    ))}
  </StyledHeaders>
);

ListHeaders.propTypes = {
  columnsOptions: PropTypes.array,
};

export default ListHeaders;

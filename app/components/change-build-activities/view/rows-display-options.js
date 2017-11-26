const rowColor = (row) => {
  let borderColor = '';
  let bgColor;
  switch (row.state) {
    case 'Rejected':
      borderColor = 'red';
      bgColor = 'rgba(204, 47, 65, 0.1)';
      break;
    case 'Running':
      borderColor = 'lightblue';
      bgColor = 'rgba(55, 153, 255, 0.1)';
      break;
    case 'Complete':
    case 'Accepted':
      borderColor = '#2BBD3E';
      bgColor = 'rgba(73, 201, 108, 0.1)';
      break;
    default:
      borderColor = 'lightgray';
  }
  // console.log(`bgColor .. ${bgColor}`);
  return { borderColor, bgColor };
};

export default { rowColor };

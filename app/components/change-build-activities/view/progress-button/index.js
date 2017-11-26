import React from 'react';
import PropTypes from 'prop-types';

const progressButton = (statusVal) => {
  let n = parseInt(statusVal, 10);
  let s = null;

  switch (n) {
    case -1:
      n = 0;
      break;
    case 0:
      n = 100;
      s = 'progress-bar-danger';
      break;
    case 100:
      s = 'progress-bar-success';
      break;
    default:
      s = 'progress-bar-info';
  }

  return s ? <ProgressBar now={n} bsStyle={s} /> : <ProgressBar now={n} />;
};

// eslint-disable-next-line react/prefer-stateless-function
class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress" style={{ width: '25px', height: '25px' }}>
        <div
          className={`progress-bar ${this.props.bsStyle}`}
          role="progressbar"
          style={{ width: `${this.props.now}%`, height: '25px' }}
          aria-valuenow={this.props.now}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  bsStyle: PropTypes.string,
  now: PropTypes.number,
};

export default progressButton;

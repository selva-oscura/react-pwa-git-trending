import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ ajaxCallsInProgress }) => {
  return (
    <div
      id="Loading"
      className={ajaxCallsInProgress ? 'animate-in' : 'animate-out'}
    >
      <div className="loader">
        <svg className="circular">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="10"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="5"
          />
        </svg>
      </div>
    </div>
  );
};

Loading.propTypes = {
  ajaxCallsInProgress: PropTypes.bool.isRequired,
};

export default Loading;

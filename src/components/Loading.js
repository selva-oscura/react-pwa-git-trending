import React from 'react';
import PropTypes from 'prop-types';

const Loading = (loaded) => {
  return(
    <div className="Loading">
      <i
        id="loading"
        className="material-icons teal-text"
      >
        refresh
      </i>
    </div>
	);
};

Loading.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default Loading;

import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
	return (
		<span>
			{error}<br/>
		</span>
	);
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessages.css';
import ErrorMessage from './ErrorMessage';

const ErrorMessages = ({errors}) => {
	return (
		<div id="ErrorMessages" className="row display-error">
			<div className="col s12 red darken-4">
				<p className="white-text">
					{errors.map((error, i) => <ErrorMessage key={i} error={error} />)}
				</p>
			</div>
		</div>
	)
}

ErrorMessages.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default ErrorMessages;

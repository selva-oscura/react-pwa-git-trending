import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessages.css';
import ErrorMessage from './ErrorMessage';

const ErrorMessages = ({errorMessages, errorRemovalInProgress}) => {
	let errorClass = errorRemovalInProgress ? "row remove-error" : "row display-error";
	return (
		<div id="ErrorMessages" className={errorClass}>
			<div className="col s12 red darken-4">
				<p className="white-text">
					{ errorMessages.map((error, i) => <ErrorMessage key={i} error={error} />) }
				</p>
			</div>
		</div>
	)
}

ErrorMessages.propTypes = {
  errorMessages: PropTypes.array.isRequired,
  errorRemovalInProgress: PropTypes.bool,
};

export default ErrorMessages;

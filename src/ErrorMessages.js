import React from 'react';
import './ErrorMessages.css';
import ErrorMessage from './ErrorMessage';

const ErrorMessages = ({errors}) => {
	return (
		<div className="ErrorMessages row red darken-4">
			<p col s12>
				{errors.map((error, i) => <ErrorMessage key={i} error={error} />)}
			</p>
		</div>
	)
}

export default ErrorMessages;
import React from 'react';
import ErrorMessage from './ErrorMessage';

const ErrorMessages = ({errors}) => {
	return (
		<div className="row red darken-4">
			<p>
				{errors.map((error, i) => <ErrorMessage key={i} error={error} />)}
			</p>
		</div>
	)
}

export default ErrorMessages;
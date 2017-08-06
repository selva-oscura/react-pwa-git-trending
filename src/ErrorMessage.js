import React from 'react';

const ErrorMessage = ({error}) => {
	return (
		<span
			className="col s12 red darken-4"
		>
			{error}<br/>
		</span>
	)
}

export default ErrorMessage;
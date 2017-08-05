import React from 'react';
import Error from './Error';

const Errors = ({errors}) => {
	return (
		<div className="row red darken-4">
			<p>
				{errors.map((error, i) => <Error key={i} error={error} />)}
			</p>
		</div>
	)
}

export default Errors;
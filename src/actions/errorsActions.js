import * as types from './actionTypes';

export function updateErrorsSuccess(errors) {
	return { type: types.UPDATE_ERRORS_SUCCESS, errors};
}

export function updateErrors(errors) {
	console.log("ERRORS", errors);
	return function(dispatch) {
		let {messages} = errors;
		dispatch(updateErrorsSuccess({
			messages: messages,
			removalInProgress: false,
		}));
	};
}

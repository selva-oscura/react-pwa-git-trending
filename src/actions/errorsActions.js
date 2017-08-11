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

export function clearErrorsDisplaySuccess() {
	return { type: types.CLEAR_ERRORS_DISPLAY_SUCCESS};
}

export function clearErrorsDisplay() {
	return function(dispatch) {
		dispatch(clearErrorsDisplaySuccess({
			removalInProgress: true,
		}));
	};
}

export function deleteErrorsSuccess(errors) {
	return { type: types.DELETE_ERRORS_SUCCESS, errors};
}

export function deleteErrors(errors) {
	return function(dispatch) {
		dispatch(deleteErrorsSuccess({
			messages: [],
			removalInProgress: false,
		}));
	};
}

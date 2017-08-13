import * as types from './actionTypes';

export function updateErrorsSuccess(errors) {
	return { type: types.UPDATE_ERRORS_SUCCESS, errors};
}

export function updateErrors(errors) {
	return function(dispatch) {
		let {messages} = errors;
		dispatch(updateErrorsSuccess({
			messages: messages,
			removalInProgress: false,
		}));
	};
}

export function clearErrorsDisplaySuccess(errors) {
	return { type: types.CLEAR_ERRORS_DISPLAY_SUCCESS, errors};
}

export function clearErrorsDisplay(errors) {
	return function(dispatch) {
		let {messages} = errors;
		dispatch(clearErrorsDisplaySuccess({
			messages: messages,
			removalInProgress: true,
		}));
	};
}

export function deleteErrorsSuccess(errors) {
	return { type: types.DELETE_ERRORS_SUCCESS, errors};
}

export function deleteErrors() {
	return function(dispatch) {
		dispatch(deleteErrorsSuccess({
			messages: [],
			removalInProgress: false,
		}));
	};
}

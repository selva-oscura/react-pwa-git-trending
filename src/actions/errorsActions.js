import * as types from './actionTypes';
import api from '../api/api';

export function updateErrorsSuccess(errors) {
	return { type: types.UPDATE_ERRORS_SUCCESS, errors};
}

export function updateErrors(errors) {
	return function(dispatch) {
		let hardCodedErrors = ['filler errors', 'the joys of testing'];
		dispatch(updateErrorsSuccess({
			messages: hardCodedErrors,
			removalInProgress: false,
		}));
	};
}

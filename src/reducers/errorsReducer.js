import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorsReducer(state = initialState.errors, action) {
	// console.log('state before update from errorsReducer', state)
	switch(action.type) {
		case types.UPDATE_ERRORS_SUCCESS:
			return action.errors;
		default:
			return state;
	}
};

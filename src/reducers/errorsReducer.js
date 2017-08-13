import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorsReducer(state = initialState.errors, action) {
	switch(action.type) {
		case types.UPDATE_ERRORS_SUCCESS:
		case types.CLEAR_ERRORS_DISPLAY_SUCCESS:
		case types.DELETE_ERRORS_SUCCESS:
			return Object.assign({}, action.errors);
		default:
			return state;
	}
};

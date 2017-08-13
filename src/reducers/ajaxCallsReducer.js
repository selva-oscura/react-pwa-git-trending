import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxCallsReducer(state = initialState.ajaxCalls, action) {
	switch(action.type) {
		case types.UPDATE_AJAX_CALLS_SUCCESS:
			return Object.assign({}, action.ajaxCalls);
		default:
			return state;
	}
};

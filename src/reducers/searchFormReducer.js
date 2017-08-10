import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchFormReducer(state = initialState.searchForm, action) {
	// ;console.log('state before update from searchFormReducer', state);
	switch(action.type) {
		case types.UPDATE_SEARCH_FORM_SUCCESS:
			return action.searchForm;
		default:
			return state;
	}
};

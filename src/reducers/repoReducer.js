import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function repoReducer(state = initialState.repos, action) {
	switch(action.type) {
		case types.LOAD_REPOS_SUCCESS:
		case types.LOAD_SAVED_DATA_SUCCESS:
			return Object.assign({}, action.repos);
		default:
			return state;
	}
};


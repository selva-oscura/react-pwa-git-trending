import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function repoReducer(state = initialState.repos, action) {
	// console.log('state before update from repoReducer', state);
	switch(action.type) {
		case types.LOAD_REPOS_SUCCESS:
			return action.repos;
		default:
			return state;
	}
}
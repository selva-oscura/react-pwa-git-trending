import * as types from './actionTypes';
import api from '../api/api';

export function loadReposSuccess(res) {
	return { type: types.LOAD_REPOS_SUCCESS, res};
}

export function loadRepos() {
	return function(dispatch) {
		// let form = this.state.form;
		// return api.queryGitHub(form.searchType, form.keyWords, form.language)
		return api.queryGitHub()
		.then(res => {
			dispatch(loadReposSuccess(res));
		}).catch(error => {
			throw(error)
		});
	}
}

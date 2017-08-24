import * as types from './actionTypes';
import * as ajaxCallsActions from './ajaxCallsActions';
import api from '../api/api';
import utils from '../utils';

export function loadReposSuccess(repos) {
	return { type: types.LOAD_REPOS_SUCCESS, repos};
}

// load repos from API call to GitHub
export function loadRepos(searchType = "top", keyWords = "", language = "") {
	return function(dispatch) {
		dispatch(ajaxCallsActions.updateAjaxCalls({callsInProgress: true}));
		return api.queryGitHub(searchType, keyWords, language)
		.then(res => {
			res.data.items = res.data.items.map((item) => {
				const {full_name, language, stargazers_count, forks_count, description, html_url} = item;
				return {full_name, language, stargazers_count, forks_count, description, html_url};
			});
			let now = new Date();
			let lastUpdated = now.getTime();
			let lastUpdatedLocal = utils.localDateTime(now);
			dispatch(loadReposSuccess({
				totalCount: res.data.total_count,
				items: res.data.items,
				lastUpdated: lastUpdated,
				lastUpdatedLocal: lastUpdatedLocal,
				lastQuery: {searchType, keyWords, language},
			}));
			dispatch(ajaxCallsActions.updateAjaxCalls({callsInProgress: false}));
		}).catch(error => {
			dispatch(ajaxCallsActions.updateAjaxCalls({callsInProgress: false}));
			throw error;
		});
	}
}

export function loadSavedDataSuccess(repos) {
	return { type: types.LOAD_SAVED_DATA_SUCCESS, repos};
}

// load saved data from LocalStorage when offline
export function loadSavedData(repos) {
	return function(dispatch) {
		dispatch(loadSavedDataSuccess(repos));
	}
}

import * as types from './actionTypes';
import api from '../api/api';

export function loadReposSuccess(repos) {
	return { type: types.LOAD_REPOS_SUCCESS, repos};
}

const localDateTime = (time) => {
  const pad = num => num < 10 ? `0${num}` : num;
  return `${time.getFullYear()}-${pad(time.getMonth() + 1)}-${pad(time.getDate())}, ${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;
}

export function loadRepos(searchType, keyWords, language) {
	return function(dispatch) {
		return api.queryGitHub(searchType, keyWords, language)
		.then(res => {
			res.data.items = res.data.items.map((item) => {
				const {full_name, language, stargazers_count, forks_count, description, html_url} = item;
				return {full_name, language, stargazers_count, forks_count, description, html_url};
			});
			let now = new Date();
			let lastUpdated = now.getTime();
			let lastUpdatedLocal = localDateTime(now);
			dispatch(loadReposSuccess({
				totalCount: res.data.total_count,
				items: res.data.items,
				lastUpdated: lastUpdated,
				lastUpdatedLocal: lastUpdatedLocal,
			}));
		}).catch(error => {
			throw error;
		});
	}
}

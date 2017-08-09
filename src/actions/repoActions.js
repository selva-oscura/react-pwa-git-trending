import * as types from './actionTypes';
import api from '../api/api';

export function loadReposSuccess(repos) {
	return { type: types.LOAD_REPOS_SUCCESS, repos};
}

const localDateTime = (time) => {
  const pad = num => num < 10 ? `0${num}` : num;
  return `${time.getFullYear()}-${pad(time.getMonth() + 1)}-${pad(time.getDate())}, ${pad(time.getHours())}:${pad(time.getMinutes())}`;
}

export function loadRepos() {
	return function(dispatch) {
		return api.queryGitHub()
		.then(res => {
			let now = new Date();
			dispatch(loadReposSuccess({
				totalCount: res.data.total_count,
				items: res.data.items,
				lastUpdated: now.getTime(),
				lastUpdatedLocal: localDateTime(now),
			}));
		}).catch(error => {
			throw error;
		});
	}
}

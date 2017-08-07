import api from '../api/api';

export function loadRepos() {
	return function(dispatch) {
		let form = this.state.form;
		return api.queryGitHub(form.searchType, form.keyWords, form.language)
		.then(res => {
			dispatch(loadReposSuccess(res));
		}).catch(error => {
			throw(error)
		});
	}
}

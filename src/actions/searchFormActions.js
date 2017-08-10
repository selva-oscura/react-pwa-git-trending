import * as types from './actionTypes';
import api from '../api/api';

export function updateSearchFormSuccess(searchForm) {
	return { type: types.UPDATE_SEARCH_FORM_SUCCESS, searchForm};
}

export function updateSearchForm() {
	return function(dispatch) {
	  let searchForm = {
	    searchType: 'top',
	    keyWords: 'fake data',
	    language: 'javascript',
	  };

		dispatch(updateSearchFormSuccess(searchForm));
	}
}

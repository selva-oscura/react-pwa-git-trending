import * as types from './actionTypes';

export function updateSearchFormSuccess(searchForm) {
	return { type: types.UPDATE_SEARCH_FORM_SUCCESS, searchForm};
}

export function updateSearchForm(searchForm) {
	return function(dispatch) {
		dispatch(updateSearchFormSuccess(searchForm));
	};
};

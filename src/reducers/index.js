import {combineReducers} from 'redux';
import repos from './repoReducer';
import searchForm from './searchFormReducer';
import errors from './errorsReducer';
import ajaxCalls from './ajaxCallsReducer';

const rootReducer = combineReducers({
	repos,
	searchForm,
	errors,
	ajaxCalls,
});

export default rootReducer;

import {combineReducers} from 'redux';
import repos from './repoReducer';
import searchForm from './searchFormReducer';
import errors from './errorsReducer';

const rootReducer = combineReducers({
	repos,
	searchForm,
	errors,
});

export default rootReducer;

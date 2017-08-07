import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { loadRepos } from './actions/repoActions';


const store = configureStore();

store.dispatch(loadRepos());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();

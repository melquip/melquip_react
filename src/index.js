import React from 'react';
import { render } from 'react-dom';
import './media/css/index.css';
import App from './containers/App';

import { Provider } from 'react-redux';

import store from './store';

render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister();

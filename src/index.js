import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './history';

import {Provider} from 'react-redux';

import store from './store';

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
	        <Route path='/' component={App} />
	    </ConnectedRouter>
    </Provider>
)    

ReactDOM.render(
	router, 
	document.getElementById('root')
);
registerServiceWorker();

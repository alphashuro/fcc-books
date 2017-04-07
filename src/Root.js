import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import App from './App';
import LandingPage from './LandingPage';
import store from './store';
import { history } from './store';

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Route exact path="/" component={LandingPage} />
			</App>
		</ConnectedRouter>
	</Provider>
);

export default Root;

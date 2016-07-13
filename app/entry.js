import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/app';
import Landing from './components/landing';
import Signin from './containers/sign-in';
import Signup from './containers/sign-up';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

import {signinSuccess} from './redux/actions/signin';

const savedAuthString = localStorage.getItem('auth');
if (savedAuthString) {
	const {user, token} = JSON.parse(savedAuthString);
	if (user && token) {
		store.dispatch(signinSuccess({user, token}));
	}
}

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const container = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Landing}/>
        <Route path="signin" component={Signin}/>
        <Route path="signup" component={Signup}/>
      </Route>
    </Router>
	</Provider>
, container);


import firebase from 'firebase';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: "AIzaSyBL3PjX2OZYaG9X8kKGChZZc5EBR-3a7sI",
	authDomain: "fcc-books.firebaseapp.com",
	databaseURL: "https://fcc-books.firebaseio.com",
	storageBucket: "fcc-books.appspot.com",
});

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/app';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const container = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
      </Route>
    </Router>
	</Provider>
, container);

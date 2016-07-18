import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import App from './containers/app';
import Landing from './components/landing';
import Signin from './containers/sign-in';
import Settings from './containers/settings';
import MyBooks from './containers/mybooks';
import AllBooks from './containers/allbooks';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBL3PjX2OZYaG9X8kKGChZZc5EBR-3a7sI",
	authDomain: "fcc-books.firebaseapp.com",
	databaseURL: "https://fcc-books.firebaseio.com",
	storageBucket: "",
};
firebase.initializeApp(config);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import {signinSuccess, signoutSuccess} from './redux/actions/signin';
import {getProfile} from './redux/actions/get-profile';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    if (!store.getState().auth.user) {
    	store.dispatch(signinSuccess({user}));
    	store.dispatch(getProfile());
    }
  } else {
  	if (store.getState().auth.user) {
    	store.dispatch(signoutSuccess());
  	}
  }
});

const container = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Landing}/>
        <Route path="signin" component={Signin}/>
        <Route path="settings" component={Settings}/>
        <Route path="mybooks" component={MyBooks}/>
        <Route path="allbooks" component={AllBooks}/>
      </Route>
    </Router>
	</Provider>
, container);


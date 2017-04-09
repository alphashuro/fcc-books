import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const middleware = [ routerMiddleware(history), thunk ];

const store = createStore(
	combineReducers({
		form: formReducer,
		router: routerReducer,
		...reducers,
	}),
	composeEnhancers(applyMiddleware(...middleware))
);

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers');
		store.replaceReducer(nextRootReducer);
	});
}

export default store;

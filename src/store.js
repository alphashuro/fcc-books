import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import userReducer from './Signin/container/reducer';
import profileReducer from './Settings/container/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const middleware = [ routerMiddleware(history), thunk ];

const store = createStore(
	combineReducers({
		form: formReducer,
		router: routerReducer,
		user: userReducer,
		profile: profileReducer,
	}),
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;

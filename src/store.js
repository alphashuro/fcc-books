import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import userReducer from './Signin/container/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

export default createStore(
	combineReducers({
		form: formReducer,
		user: userReducer,
	}),
	composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

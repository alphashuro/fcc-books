import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import initialState from './initial-state';
import mainReducer from './reducers';

const store = createStore(
	mainReducer, 
	initialState,
  compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;

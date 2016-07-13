import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import books from './books';
import trades from './trades';

const booksReducer = combineReducers({
	auth,
	books,
	trades,
	routing: routerReducer,
});

export default booksReducer;

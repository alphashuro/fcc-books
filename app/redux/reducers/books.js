import * as types from '../actions/types';
import initialState from '../initial-state';

export default function books(state = initialState.books, action) {
	switch(action.type) {
		case types.GET_ALL_BOOKS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.GET_ALL_BOOKS_SUCCESS:
			return {
				...state,
				loading: false,
				all: action.books,
			};
		case types.GET_ALL_BOOKS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.GET_MY_BOOKS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.GET_MY_BOOKS_SUCCESS:
			return {
				...state,
				loading: false,
				mine: action.books,
			};
		case types.GET_MY_BOOKS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.ADD_BOOK_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.ADD_BOOK_SUCCESS:
			return {
				...state,
				loading: false,
				mine: [
					...state.mine,
					action.book,
				],
				all: [
					...state.all,
					action.book,
				],
			};
		case types.ADD_BOOK_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}

import { combineReducers } from 'redux';
import * as types from './action-types';

import initialState from './initial-state';

function auth(state = initialState.auth, action) {
	switch(action.type) {
		case types.SIGNIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.user,
			};
		case types.SIGNIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.SIGNOUT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.SIGNOUT_SUCCESS:
			return {
				...state,
				loading: false,
				user: null,
			};
		case types.SIGNOUT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.SIGNUP_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.SIGNUP_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.user,
			};
		case types.SIGNUP_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.UPDATE_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.user,
			};
		case types.UPDATE_PROFILE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}

function books(state = initialState.books, action) {
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

function trades(state = initialState.trades, action) {
	switch(action.type) {
		case types.REQUEST_TRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.REQUEST_TRADE_SUCCESS:
			return {
				...state,
				loading: false,
				outgoing: [
					...state.outgoing,
					action.tradeRequest,
				]
			};
		case types.REQUEST_TRADE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.APPROVE_TRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.APPROVE_TRADE_SUCCESS: {
			const approvedRequestIndex = state.incoming.findIndex(request => request.id === action.approvedRequestId);
			return {
				...state,
				loading: false,
				incoming: [
					...state.incoming.slice(0, approvedRequestIndex),
					{
						...state.incoming[approvedRequestIndex],
						status: 'APPROVED',
					},
					...state.incoming.slice(approvedRequestIndex+1),
				]
			};
		}
		case types.APPROVE_TRADE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case types.DENY_TRADE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.DENY_TRADE_SUCCESS:{
			const deniedRequestIndex = state.outgoing.findIndex(request => request.id === action.deniedRequestId);
			return {
				...state,
				loading: false,
				outgoing: [
					...state.outgoing.slice(0, deniedRequestIndex),
					{
						...state.outgoing[deniedRequestIndex],
						status: 'DENIED',
					},
					...state.outgoing.slice(deniedRequestIndex+1),
				]
			};
		}
		case types.DENY_TRADE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}

const booksReducer = combineReducers({
	auth,
	books,
	trades,
});

export default booksReducer;

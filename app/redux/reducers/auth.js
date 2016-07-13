import * as types from '../actions/types';
import initialState from '../initial-state';

export default function auth(state = initialState.auth, action) {
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
				token: action.token,
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
				token: null,
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
				token: action.token,
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

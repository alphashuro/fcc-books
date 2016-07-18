import * as types from '../actions/types';
import initialState from '../initial-state';

export default function profile(state = initialState.profile, action) {
	switch(action.type) {
		case types.GET_PROFILE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.GET_PROFILE_SUCCESS:
			return {
				...state,
				loading: false,
				name: action.name,
				city: action.city,
				state: action.state,
			};
		case types.GET_PROFILE_FAILURE:
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

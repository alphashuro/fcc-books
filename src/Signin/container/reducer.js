import { types } from './actions';

function userReducer(state = null, action) {
	switch (action.type) {
		case types.SIGNED_IN:
			return action.user;

		case types.SIGNED_OUT:
			return null;

		default:
			return state;
	}
}

export default userReducer;

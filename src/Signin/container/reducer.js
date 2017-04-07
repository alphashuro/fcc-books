import { types } from './actions';

function userReducer(state = null, action) {
	switch (action.type) {
		case types.SIGNED_IN:
			return action.user;

		default:
			return state;
	}
}

export default userReducer;

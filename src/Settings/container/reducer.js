import { types } from './actions';

export default (state = null, action) => {
	switch (action.type) {
		case types.PROFILE_RECIEVED:
			return action.profile;
		default:
			return state;
	}
};

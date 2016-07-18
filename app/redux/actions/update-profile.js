import * as types from './types';

export const updateProfileRequest = () => ({
	type: types.UPDATE_PROFILE_REQUEST,
});
export const updateProfileSuccess = () => ({
	type: types.UPDATE_PROFILE_SUCCESS,
});
export const updateProfileFailure = error => ({
	type: types.UPDATE_PROFILE_FAILURE,
});

export const updateProfile = new_user_info => async (dispatch, getState) => {
	dispatch(updateProfileRequest());

	try {
		const state = getState();
		const auth = state.auth;
		const user = auth.user;
		if (!user) throw new Error('not logged in');
		const userId = user.uid;
		firebase.database()
			.ref(`users/${userId}`)
			.set(new_user_info);
		dispatch(updateProfileSuccess());
	} catch (e) {
		dispatch(updateProfileFailure(e));
	}
};

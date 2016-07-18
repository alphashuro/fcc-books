import * as types from './types';

export const getProfileRequest = () => ({
	type: types.GET_PROFILE_REQUEST,
});
export const getProfileSuccess = ({name, city, state}) => ({
	type: types.GET_PROFILE_SUCCESS,
	name, city, state,
});
export const getProfileFailure = error => ({
	type: types.GET_PROFILE_FAILURE,
	error,
});

export const getProfile = () => async (dispatch, getState) => {
	dispatch(getProfileRequest());

	try {
		const user = getState().auth.user;
		if (!user) throw new Error('not logged in');
		const userId = user.uid;
		firebase.database()
			.ref(`/users/${userId}`)
			.on('value', snapshot => {
				if (snapshot.val()) {
					const {name, city, state} = snapshot.val();
					dispatch(getProfileSuccess({name, city, state}));
				}
			});
	} catch (e) {
		console.log(e);
		dispatch(getProfileFailure(e));
	}
}

export default getProfile;

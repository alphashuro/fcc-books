import api from '../../api';
import { compose } from 'ramda';

export const types = { PROFILE_RECIEVED: 'PROFILE_RECIEVED' };

export const profileRecieved = profile => ({
	type: types.PROFILE_RECIEVED,
	profile,
});

export const getProfile = userId =>
	dispatch =>
		api.getProfile(userId).subscribe(compose(dispatch, profileRecieved));

export const updateProfile = profile =>
	() => api.updateProfile(profile).subscribe();

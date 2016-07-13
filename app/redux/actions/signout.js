import * as types from './types';
import {push} from 'react-router-redux';

export const signoutRequest = () => ({
	type: types.SIGNOUT_REQUEST,
});

export const signoutSuccess = () => ({
	type: types.SIGNOUT_SUCCESS,
});
export const signoutFailure = error => ({
	type: types.SIGNOUT_FAILURE,
	error,
});

const signout = () => async dispatch => {
	dispatch(signoutRequest());

	try {
		localStorage.removeItem('auth');
		dispatch(signoutSuccess());
		dispatch(push('/'));
	} catch (e) {
		console.error(e);
		dispatch(signoutFailure(e));
	}
};

export default signout;

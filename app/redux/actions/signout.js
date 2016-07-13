import * as types from './types';

export const signoutRequest = () => {};
export const signoutSuccess = () => ({
	type: types.SIGNOUT_SUCCESS,
});
export const signoutFailure = error => {};

function signout() {}

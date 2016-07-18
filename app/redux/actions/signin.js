import * as types from './types';
import {API_URL as apiUrl} from '../constants';
import {push} from 'react-router-redux';

export const signinRequest = () => ({
	type: types.SIGNIN_REQUEST,
});
export const signinSuccess = ({user, token}) => ({
	type: types.SIGNIN_SUCCESS,
	user,
});
export const signinFailure = error => ({
	type: types.SIGNIN_FAILURE,
	error,
});

export const signinGoogle = () => async dispatch => {
	dispatch(signinRequest());

	try {
		const provider = new firebase.auth.GoogleAuthProvider();
		const {user} = await firebase.auth().signInWithPopup(provider)
	  dispatch(signinSuccess({user}));
	} catch (error) {
		console.error(error);
		dispatch(signinFailure(error));
	}
};

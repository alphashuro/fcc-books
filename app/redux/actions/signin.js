import * as types from './types';
import {API_URL as apiUrl} from '../constants';
import {push} from 'react-router-redux';

export const signinRequest = () => ({
	type: types.SIGNIN_REQUEST,
});
export const signinSuccess = ({user, token}) => ({
	type: types.SIGNIN_SUCCESS,
	user,
	token,
});
export const signinFailure = error => ({
	type: types.SIGNIN_FAILURE,
	error,
});

export const signin = (email, password) => async dispatch => {
	dispatch(signinRequest());

	const options = {
		method: 'POST',
		headers: {
			'Accept': '*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email, password
		}),
	};

	try {
		const response = await fetch(apiUrl+'/signin', options);
		const {user, token} = await response.json();
		dispatch(signinSuccess({user, token}));
		dispatch(push('/'));
	} catch (e) {
		console.error(e);
		dispatch(signinFailure(e.message || e));
	}
};

export default signin;

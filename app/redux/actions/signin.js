import * as types from './types';
import {API_URL as apiUrl} from '../constants';

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
		localStorage.setItem('auth', JSON.stringify({user, token}));
		dispatch(signinSuccess({user, token}));
	} catch (e) {
		console.error(e);
		dispatch(signinFailure(e.message || e));
	}
};

export default signin;

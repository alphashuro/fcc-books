import * as types from './types';
import {API_URL as apiUrl} from '../constants';

export const signupRequest = () => ({ 
	type: types.SIGNUP_REQUEST,
});
export const signupSuccess = ({user, token}) => ({
	type: types.SIGNUP_SUCCESS,
	user,
	token,
});
export const signupFailure = error => ({
	type: types.SIGNUP_FAILURE,
	error,
});

export const signup = ({email, password, fullName, city, state}) => async dispatch => {
	dispatch(signupRequest());

	const data = {
		email,
		password,
		fullName,
		city,
		state,
	};

	const options = {
		method: 'POST',
		headers: {
			'Accept': '*',
    	'Content-Type': 'application/json',
  	},
		body: JSON.stringify(data),
		// mode: 'no-cors',
	};

	try {
		const response = await fetch(apiUrl+'/signup', options);
		const {user, token} = await response.json();
		localStorage.setItem('auth', JSON.stringify({user, token}));
		dispatch(signupSuccess(responseData));
	} catch (e) {
		console.log(e);
		dispatch(signupFailure(e.message || e));
	}
};

export default signup;

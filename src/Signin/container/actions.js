import * as api from '../../api';
import { push } from 'react-router-redux';
import firebase from 'firebase';

export const types = {
	SIGNED_IN: 'SIGNED_IN',
};

export function signedIn(user) {
	return {
		type: types.SIGNED_IN,
		user,
	};
}

export function signin() {
	return async dispatch => {
		try {
			const { user } = await api.signinWithGoogle();
			dispatch(signedIn(user));
			dispatch(push('/'));
		} catch (e) {
			console.error(e);
		}
	};
}

export function listenForSignin() {
	return dispatch => firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				dispatch(signedIn(user));
				dispatch(push('/'));
			} else {
				dispatch(push('/signin'));
			}
		});
}

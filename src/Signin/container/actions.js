import { authChanged, googleSigninSource } from '../../api';
import { push } from 'react-router-redux';
import { ifElse, compose } from 'ramda';

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
	return dispatch => {
		const dispatchSignedIn = compose(dispatch, signedIn);
		const redirectToRoot = () => dispatch(push('/'));

		googleSigninSource.do(dispatchSignedIn).subscribe(redirectToRoot);
	};
}

export function listenForAuth() {
	return dispatch => {
		const dispatchSignedIn = compose(dispatch, signedIn);
		const redirectToSignin = () => dispatch(push('/signin'));

		return authChanged.subscribe(
			ifElse(Boolean, dispatchSignedIn, redirectToSignin)
		);
	};
}

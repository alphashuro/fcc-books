import { authChangedSource, googleSigninSource } from '../../api';
import { push } from 'react-router-redux';
import store from '../../store';

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
	return dispatch =>
		googleSigninSource.subscribe(user => {
			dispatch(signedIn(user));
			dispatch(push('/'));
		});
}

authChangedSource.subscribe(
	user =>
		user ? store.dispatch(signedIn(user)) : store.dispatch(push('/signin'))
);

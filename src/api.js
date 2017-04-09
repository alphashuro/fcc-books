import firebase from 'firebase';
import { Observable } from 'rxjs';
import { concat } from 'ramda';

var config = {
	apiKey: 'AIzaSyBL3PjX2OZYaG9X8kKGChZZc5EBR-3a7sI',
	authDomain: 'fcc-books.firebaseapp.com',
	databaseURL: 'https://fcc-books.firebaseio.com',
	projectId: 'fcc-books',
	storageBucket: 'fcc-books.appspot.com',
	messagingSenderId: '552893236532',
};

firebase.initializeApp(config);

const dbRef = path => firebase.database().ref(path);
const observeOn = event => obj => Observable.fromEvent(obj, event);
const setRef = data => ref => ref.set(data);

/**
 * Emits a `user` object when a user signs in
 * Emits null when a user signs out
 * @returns {Observable}
 */
export const authChangedSource = Observable.using(
	() => firebase.auth(),
	auth =>
		Observable.create(observer =>
			auth.onAuthStateChanged(observer.next.bind(observer)))
);

/**
 *
 */
export function getProfile() {
	return authChangedSource
		.filter(Boolean) // ignore logged out users
		.pluck('uid')
		.map(concat('users/'))
		.map(dbRef)
		.flatMap(observeOn('value'))
		.map(snapshot => snapshot.val());
}

export function updateProfile(profile) {
	return authChangedSource
		.filter(Boolean) // ignore logged out users
		.pluck('uid')
		.map(concat('users/'))
		.map(dbRef)
		.map(setRef(profile));
}

export const googleSigninSource = Observable.using(
	() => new firebase.auth.GoogleAuthProvider(),
	provider =>
		Observable.fromPromise(firebase.auth().signInWithPopup(provider))
);

export default {
	googleSigninSource,
	authChangedSource,
	getProfile,
	updateProfile,
};

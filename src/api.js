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
const getVal = snapshot => snapshot.val();

/**
 * Emits a `user` object when a user signs in
 * Emits null when a user signs out
 * @returns {Observable}
 */
export const authChanged = Observable.using(
	() => firebase.auth(),
	auth =>
		Observable.create(observer =>
			auth.onAuthStateChanged(observer.next.bind(observer)))
);

/**
 *
 */
export function getProfile() {
	return authChanged
		.filter(Boolean) // ignore logged out users
		.pluck('uid')
		.map(concat('users/'))
		.map(dbRef)
		.flatMap(observeOn('value'))
		.map(getVal);
}

export function updateProfile(profile) {
	return authChanged
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

export function searchBook(text) {
	const params = new URLSearchParams();
	params.set('fields', 'kind,items(volumeInfo/title, volumeInfo/imageLinks)');
	params.set('q', text);
	const url = 'https://www.googleapis.com/books/v1/volumes?' +
		params.toString();
	return fetch(url);
}

export function addBook(book) {
	const newBookKey = firebase.database().ref().child('books').push().key;
	const user = firebase.auth().currentUser;

	if (!user) return;

	const bookData = {
		...book,
		userId: user.uid,
	};

	const updates = {
		[`/books/${newBookKey}`]: bookData,
		[`/user-books/${user.uid}/${newBookKey}`]: bookData,
	};

	return firebase.database().ref().update(updates);
}

export function getMyBooks() {
	return authChanged
		.filter(Boolean)
		.pluck('uid')
		.map(concat('user-books/'))
		.map(dbRef)
		.flatMap(observeOn('value'))
		.map(getVal);
}

export default {
	googleSigninSource,
	authChanged,
	getProfile,
	updateProfile,
	searchBook,
	addBook,
	getMyBooks,
};

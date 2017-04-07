import firebase from 'firebase';

export function init() {
	var config = {
		apiKey: 'AIzaSyBL3PjX2OZYaG9X8kKGChZZc5EBR-3a7sI',
		authDomain: 'fcc-books.firebaseapp.com',
		databaseURL: 'https://fcc-books.firebaseio.com',
		projectId: 'fcc-books',
		storageBucket: 'fcc-books.appspot.com',
		messagingSenderId: '552893236532',
	};

	firebase.initializeApp(config);
}

export function signinWithGoogle() {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase.auth().signInWithPopup(provider);
}

export default {
	init,
	signinWithGoogle,
};

export * as actionTypes from './types';

import firebase from 'firebase';
export const provider = new firebase.auth.GoogleAuthProvider();

// auth actions
export * from './signin';
export * from './signout';

// profile actions
export * from './get-profile';
export * from './update-profile';

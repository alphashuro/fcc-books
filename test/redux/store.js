const {describe, it} = global;
import {assert} from 'chai';

import store from '../../app/redux/store';
import reducer from '../../app/redux/reducers';
import * as actions from '../../app/redux/actions';

describe('store', () => {
	it('should have a dispatch function', () => {
		const actual = typeof store.dispatch;
		const expected = 'function';
		
		assert.equal(actual, expected);
	});

	it('should set auth.user when login successful is dispatched', () => {
		const user = 'x';
		const state = {
			auth: {
				user: null
			}
		};
		const actual = reducer(state, actions.signinSuccess(user)).auth.user;
		const expected = 'x';

		assert.deepEqual(actual, expected);
	});

	it('should set auth.user to null when logout successful', () => {
		const state = {
			auth: {
				user: 'x'
			}
		};
		const actual = reducer(state, actions.signoutSuccess()).auth.user;
		const expected = null;
		
		assert.equal(actual, expected);
	});
});

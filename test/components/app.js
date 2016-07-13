const {describe, it} = global;
import {assert} from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from '../../app/components/app';

describe('the app component', () => {
	it('should not be undefined', () => {
		const actual = typeof App !== 'undefined';
		const expected = true;
		
		assert.equal(actual, expected);
	});
	// it('should show a login button if no user is passed to it', () => {
	// 	const props = { user: null };

	// 	const el = shallow(<App {...props}/>);

	// 	const actual = el.contains('LoginButton');
	// 	const expected = true;
		
	// 	assert.equal(actual, expected);
	// });
});

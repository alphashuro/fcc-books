import React from 'react';
import { storiesOf, addDecorator, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import {
	withKnobs,
	text,
	boolean,
	number,
} from '@kadira/storybook-addon-knobs';

import App from '../src/App';
import Nav from '../src/App/Nav';
import Signin from '../src/Signin';
import Signup from '../src/Signup';

addDecorator(muiTheme());

storiesOf('App', module)
	.add('App', () => <App />)
	.add('Nav', () => (
		<Nav
			onSignin={linkTo('App', 'Signin')}
			onSignup={linkTo('App', 'Signup')}
		/>
	))
	.add('Signin', () => <Signin />)
	.add('Signup', () => <Signup />);

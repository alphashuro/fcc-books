import React from 'react';
import { storiesOf, addDecorator, action, linkTo } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';

import App from '../src/App';
import Nav from '../src/App/Nav';

storiesOf('App', module)
	.addDecorator(muiTheme())
	.add('App', () => <App />)
	.add('Nav', Nav);

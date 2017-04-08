import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { init } from './api';
init();

const root = document.getElementById('root');

const renderApp = () =>
	render(
		<AppContainer>
			<Root />
		</AppContainer>,
		root
	);

renderApp();

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./Root', () => {
		require('./Root');
		renderApp();
	});
}

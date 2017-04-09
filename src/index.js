import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

// Needed for material ui onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const root = document.getElementById('root');

const renderApp = () =>
	render(
		<AppContainer>
			<Root />
		</AppContainer>,
		root
	);

renderApp(); // initial render

// Hot Module Replacement API
// hack away HMR, hack away
if (module.hot) {
	module.hot.accept('./Root', () => {
		require('./Root');
		renderApp();
	});
}

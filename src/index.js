import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { init } from './api';
init();

ReactDOM.render(
	<AppContainer>
		<Root />
	</AppContainer>,
	document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./Root', () => {
		const NextApp = require('./Root').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}

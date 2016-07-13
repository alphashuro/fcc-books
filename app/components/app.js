import React from 'react';

// theme required by material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from '../containers/nav';

const App = ({user, children}) => (
	<MuiThemeProvider>
		<div className="app">
			<Nav/>
			{ children }
		</div>
	</MuiThemeProvider>
);

export default App;

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// theme required by material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


const App = ({user, children}) => (
	<MuiThemeProvider>
		<div className="app">
			<AppBar
				title="Bookclub"
				showMenuIconButton={false}
			/>
			{ children }
		</div>
	</MuiThemeProvider>
);

export default App;

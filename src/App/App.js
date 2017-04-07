import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Nav } from './container';

const App = ({ children }) => (
	<MuiThemeProvider>
		<div className="App">
			<Nav />
			{children}
		</div>
	</MuiThemeProvider>
);

export default App;

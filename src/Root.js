import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store, { history } from './store';
import Nav from './Nav';
import LandingPage from './LandingPage';
import SigninPage from './Signin';
import SettingsPage from './Settings';
import MyBooksPage from './MyBooksPage';

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MuiThemeProvider>
				<div className="app">
					<Nav />

					<Route exact path="/" component={LandingPage} />
					<Route path="/signin" component={SigninPage} />
					<Route path="/settings" component={SettingsPage} />
					<Route path="/mybooks" component={MyBooksPage} />
				</div>
			</MuiThemeProvider>
		</ConnectedRouter>
	</Provider>
);

export default Root;

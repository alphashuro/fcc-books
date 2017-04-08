import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { NavLink } from 'react-router-dom';

const FlatLink = ({ label, to }) => (
	<NavLink to={to}><FlatButton label={label} /></NavLink>
);

export default ({ user }) => {
	const LoggedIn = () => (
		<div style={{ marginTop: 5 }}>
			<FlatLink to="books" label="All Books" />
			<FlatButton label="My Books" />
			<FlatLink to="settings" label="Settings" />
		</div>
	);

	return (
		<AppBar
			title={<FlatLink to="/" label="Bookjump" />}
			iconElementRight={
				user ? <LoggedIn /> : <FlatLink label="Sign in" to="signin" />
			}
		/>
	);
};

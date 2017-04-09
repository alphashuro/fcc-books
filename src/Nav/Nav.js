import React from 'react';
import AppBar from 'material-ui/AppBar';
import { FlatButton, IconMenu, MenuItem, IconButton } from 'material-ui';
import Settings from 'material-ui/svg-icons/action/settings';
import Person from 'material-ui/svg-icons/social/person';
import { NavLink } from 'react-router-dom';

const FlatLink = ({ label, to }) => (
	<NavLink to={to}><FlatButton label={label} /></NavLink>
);

const LoggedIn = ({ signout }) => (
	<div>
		<FlatLink to="books" label="All Books" />
		<FlatLink to="mybooks" label="My Books" />
		<NavLink to="settings">
			<IconButton><Settings /></IconButton>
		</NavLink>
		<IconMenu
			iconButtonElement={
				<IconButton>
					<Person />
				</IconButton>
			}
			targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
		>
			<MenuItem primaryText="Sign out" onClick={signout} />
		</IconMenu>
	</div>
);

export default React.createClass({
	componentDidMount() {
		this.authSubscription = this.props.listenForAuth();
	},

	componentWillUnmount() {
		this.authSubscription && this.authSubscription.unsubscribe();
	},

	render() {
		const { user } = this.props;

		return (
			<div>
				<AppBar
					title={<FlatLink to="/" label="Bookjump" />}
					iconElementRight={
						user
							? <LoggedIn signout={this.props.signout} />
							: <FlatLink label="Sign in" to="signin" />
					}
				/>
			</div>
		);
	},
});

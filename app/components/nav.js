import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

const Nav = ({loggedIn, user, handleSignin, handleSignout}) => {
	return (
		<Toolbar>
			<ToolbarGroup firstChild={true}>
				<ToolbarTitle text="Books Galore" />
			</ToolbarGroup>
			<ToolbarGroup>
				{
					loggedIn ? (
						[
							<RaisedButton label="All Books"></RaisedButton>,
							<RaisedButton label="My Books"></RaisedButton>,
							<RaisedButton label="Settings"></RaisedButton>,
							<ToolbarSeparator/>,
							<RaisedButton label="Logout"/>
						]
					) : (
						<RaisedButton label='Sign in' onClick={() => handleSignin()}/>
					)
				}
			</ToolbarGroup>
		</Toolbar>
	);
}

export default Nav;

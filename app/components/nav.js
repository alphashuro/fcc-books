import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';

const Nav = ({loggedIn, user, handleSignin, handleSignout, dispatch}) => {
	return (
		<Toolbar>
			<ToolbarGroup firstChild={true}>
				<ToolbarTitle text="Books Galore"/>
				<RaisedButton label="Home" onClick={() => dispatch(push('/'))}/>
			</ToolbarGroup>
			<ToolbarGroup lastChild={false}>
				{
					loggedIn ? (
						[
							<RaisedButton key={1} label="All Books" onClick={() => dispatch(push('/allbooks'))}></RaisedButton>,
							<RaisedButton key={2} label="My Books" onClick={() => dispatch(push('/mybooks'))}></RaisedButton>,
							// <ToolbarSeparator key={4}/>,
							<ToolbarTitle key={5} text={user.email}/>,
							<RaisedButton key={6} label="Settings" onClick={() => dispatch(push('/settings'))}/>,
							<ToolbarSeparator key={7}/>,
							<RaisedButton key={8} label="Logout" onClick={() => handleSignout()}/>,
						]
					) : (
						<RaisedButton label='Sign in' onClick={() => handleSignin()}/>
					)
				}
			</ToolbarGroup>
		</Toolbar>
	);
};

export default Nav;

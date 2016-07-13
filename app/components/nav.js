import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';

const Nav = ({loggedIn, user, handleSignin, handleSignout, dispatch}) => {
	return (
		<Toolbar>
			<ToolbarGroup firstChild={true}>
				<ToolbarTitle style={{marginLeft: '15px'}} text="Books Galore"/>
				<FlatButton label="Home" onClick={() => dispatch(push('/'))}/>
			</ToolbarGroup>
			<ToolbarGroup lastChild={false}>
				{
					loggedIn ? (
						[
							<FlatButton key={1} label="All Books" onClick={() => dispatch(push('/allbooks'))}></FlatButton>,
							<FlatButton key={2} label="My Books" onClick={() => dispatch(push('/mybooks'))}></FlatButton>,
							// <ToolbarSeparator key={4}/>,
							<FlatButton key={6} label="Settings" onClick={() => dispatch(push('/settings'))}/>,
							<ToolbarTitle key={5} text={user.email}/>,
							<ToolbarSeparator key={7}/>,
							<FlatButton key={8} label="Logout" onClick={() => handleSignout()}/>,
						]
					) : (
						<FlatButton label='Sign in' onClick={() => handleSignin()}/>
					)
				}
			</ToolbarGroup>
		</Toolbar>
	);
};

export default Nav;

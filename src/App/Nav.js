import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const NavDiv = styled.div`
	margin-top: 5px;
`;

const LoggedIn = props => (
	<NavDiv {...props}>
		<FlatButton label="All Books" />
		<FlatButton label="My Books" />
		<FlatButton label="Settings" />
	</NavDiv>
);

export default ({ user, onSignup, onSignin }) => {
	return (
		<AppBar
			title="Title"
			iconElementLeft={null}
			iconElementRight={
				user
					? <LoggedIn />
					: <FlatButton label="Sign in" onClick={onSignin} />
			}
		/>
	);
};

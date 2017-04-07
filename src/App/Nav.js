import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default ({ onSignup, onSignin }) => (
	<AppBar
		title="Title"
		iconElementRight={
			<div>
				<FlatButton label="Sign up" onClick={onSignup} />
				<FlatButton label="Sign in" onClick={onSignin} />
			</div>
		}
	/>
);

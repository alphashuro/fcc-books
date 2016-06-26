import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const UserButton = ({user, handleSignin, handleSignout}) => {
	if (!user) {
		return <RaisedButton label='login' onClick={() => handleSignin()}/>;
	}
	return <div>Logged in</div>;
};

export default UserButton;

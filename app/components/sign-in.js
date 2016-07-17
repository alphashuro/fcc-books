import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
};

const Signin = React.createClass({
	componentWillReceiveProps({loggedIn, redirect}) {
		if (loggedIn) redirect();
	},
	
	render() {
		const {handleSignin} = this.props;
		return (
			<div style={styles}>
				<h1>Sign in</h1>
				<RaisedButton
					label="Sign in with Google"
					onClick={handleSignin}
					primary
				/>
			</div>
		);
	}
});

export default Signin;

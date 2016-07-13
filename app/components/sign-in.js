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
	componentWillMount() {
		const {loggedIn, redirect, savedSignin} = this.props;
		if (loggedIn) {
			return redirect();
		}
		const savedAuthString = localStorage.getItem('auth');
		if (savedAuthString) {
			const {user, token} = JSON.parse(savedAuthString);
			if (user && token) {
				return savedSignin({user, token});
			}
		}
	},
	render() {
		const {loggedIn, redirect, handleSignin, handleSignup} = this.props;

		return (
			<div style={styles}>
				<h1>Sign in</h1>
				<form 
					style={styles}
					onSubmit={e => {
						e.preventDefault();
						const email = this.email.getValue();
						const password = this.password.getValue();
						handleSignin(email,password);
					}}>
					<TextField 
						name="email"
						type="email"
						hintText="me@domain.com"
						floatingLabelText="Email"
						ref={node => this.email = node}
						required
						/>
					<TextField 
						name="password"
						type="password"
						floatingLabelText="Password"
						ref={node => this.password = node}
						required
						/>
						<div>
							<RaisedButton
								label="Sign in"
								type="submit"
								primary
							/>
							<FlatButton
								label="Sign up"
								onClick={() => handleSignup()}
							/>
						</div>
				</form>
			</div>
		);
	}
});

export default Signin;

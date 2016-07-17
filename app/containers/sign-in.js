import {connect} from 'react-redux';
import Signin from '../components/sign-in';
import {signinSuccess, signinGoogle} from '../redux/actions/signin';
import {push} from 'react-router-redux';

const SigninContainer = connect(
	state => ({
		loggedIn: !!state.auth.user,
	}),
	dispatch => ({
		handleSignin: () => {
			dispatch(signinGoogle());
		},
		redirect: () => dispatch(push('/')),
	})
)(Signin);

export default SigninContainer;

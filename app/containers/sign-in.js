import {connect} from 'react-redux';
import Signin from '../components/sign-in';
import signin, {signinSuccess} from '../redux/actions/signin';
import {push} from 'react-router-redux';

const SigninContainer = connect(
	state => ({
		loggedIn: !!state.auth.user,
	}),
	dispatch => ({
		handleSignin: (email, password) => {
			dispatch(signin(email, password));
		},
		handleSignup: () => dispatch(push('/signup')),
		redirect: () => dispatch(push('/')),
		savedSignin: ({user, token}) => {
			dispatch(signinSuccess({user, token}));
			dispatch(push('/'));
		},
	})
)(Signin);

export default SigninContainer;

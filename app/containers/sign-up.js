import {connect} from 'react-redux';
import Signup from '../components/sign-up';
import signup from '../redux/actions/signup';
import {push} from 'react-router-redux';

const SignupContainer = connect(
	state => ({
		loggedIn: !!state.auth.user,
	}),
	dispatch => ({
		handleSignup: (email, password) => {
			dispatch(signup({email, password, fullName: "", city: "", state: ""}));
		},
		handleSignin: () => dispatch(push('/signin')),
		redirect: () => dispatch(push('/')),
		savedSignin: ({user, token}) => {
			dispatch(signinSuccess({user, token}));
			dispatch(push('/'));
		},
	})
)(Signup);

export default SignupContainer;

import {connect} from 'react-redux';
import Nav from '../components/nav';
import { push } from 'react-router-redux';
import signout from '../redux/actions/signout';

const NavContainer = connect(
	state => {
		const user = state.auth.user;
		const loggedIn = !!user;
		return {
			loggedIn: !!state.auth.user,
			user,
		};
	},
	dispatch => ({
		handleSignin: () => dispatch(push('/signin')),
		handleSignout: () => dispatch(signout()),
		dispatch,
	})
)(Nav);

export default NavContainer;

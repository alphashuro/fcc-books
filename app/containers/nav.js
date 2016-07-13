import {connect} from 'react-redux';
import Nav from '../components/nav';
import { push } from 'react-router-redux';

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
		handleSignout: () => console.log('logging out'),
		dispatch,
	})
)(Nav);

export default NavContainer;

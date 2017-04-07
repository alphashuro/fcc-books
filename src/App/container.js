import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { listenForSignin } from '../Signin/container/actions';
import Nav from './Nav';
import App from './App';

const NavContainer = connect(
	state => ({ user: state.user }),
	dispatch => ({
		onSignin: () => dispatch(push('/signin')),
	})
)(Nav);

const AppContainer = connect(null, dispatch => {
	dispatch(listenForSignin());
	return {};
})(App);

export { NavContainer as Nav, AppContainer as App };

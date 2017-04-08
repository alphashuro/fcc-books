import { connect } from 'react-redux';
import { listenForSignin } from '../Signin/container/actions';
import Nav from './Nav';

export default connect(
	state => ({ user: state.user }),
	dispatch => {
		dispatch(listenForSignin());
		return {};
	}
)(Nav);

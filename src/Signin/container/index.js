import { connect } from 'react-redux';
import Signin from '../Signin';
import { signin, listenForSignin } from './actions';

export default connect(null, dispatch => {
	dispatch(listenForSignin());
	return {
		onGoogleSignin: () => dispatch(signin()),
	};
})(Signin);

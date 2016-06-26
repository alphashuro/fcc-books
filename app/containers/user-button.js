import {connect} from 'react-redux';
import UserButton from '../components/user-button';
import { push } from 'react-router-redux';

const UserButtonContainer = connect(
	state => ({user: state.user}),
	dispatch => ({
		handleSignin: () => dispatch(push('/signin')),
	})
)(UserButton);

UserButtonContainer.displayName = 'UserButton';

export default UserButtonContainer;

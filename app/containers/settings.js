import {connect} from 'react-redux';
import Settings from '../components/settings';
import {getProfile} from '../redux/actions/get-profile';
import {updateProfile} from '../redux/actions/update-profile';

const SettingsContainer = connect(
	state => ({
		...state.profile,
		loggedIn: !!state.auth.user,
	}),
	dispatch => ({
		handleUpdateInfo: newInfo => {
			dispatch(updateProfile(newInfo));
		},
		getProfileInfo: () => {
			dispatch(getProfile());
		},
	}),
)(Settings);

export default SettingsContainer;

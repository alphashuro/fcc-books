import { connect } from 'react-redux';
import ProfileForm from '../ProfileForm';
import { getProfile, updateProfile } from './actions';

export default connect(
	state => ({ user: state.user, initialValues: state.profile }),
	{ getProfile, onSubmit: updateProfile }
)(ProfileForm);

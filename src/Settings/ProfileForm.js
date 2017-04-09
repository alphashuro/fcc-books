import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { RaisedButton } from 'material-ui';

const Form = React.createClass({
	componentDidMount() {
		this.profileSubscription = this.props.getProfile();
	},

	componentWillUnmount() {
		this.profileSubscription.unsubscribe();
	},

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<h2>Update Profile</h2>
				<Field name="name" component={TextField} hintText="Full Name" />
				<Field name="city" component={TextField} hintText="City" />
				<Field name="state" component={TextField} hintText="State" />
				<RaisedButton type="submit" label="Save Changes" />
			</form>
		);
	},
});

export default reduxForm({
	form: 'settings.profile',
})(Form);

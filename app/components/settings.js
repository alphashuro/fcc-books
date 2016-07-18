import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import styles from './settings.css';

const Settings = React.createClass({
	componentWillMount() {
		this.props.getProfileInfo();
	},
	
	render() {
		const {handleUpdateInfo, name, city, state} = this.props;

		return (
			<div>
				<form 
					className={styles.form}
					onSubmit={e => {
						e.preventDefault();
						handleUpdateInfo({
							name: this.name.getValue(),
							city: this.city.getValue(),
							state: this.state.getValue(),
						});
					}}
					>
					<h1>Profile</h1>
					<TextField name="name" defaultValue={name} floatingLabelText="Name" ref={node => this.name = node}/>
					<TextField name="city" defaultValue={city} floatingLabelText="City" ref={node => this.city = node}/>
					<TextField name="state" defaultValue={state} floatingLabelText="State" ref={node => this.state = node}/>
					<RaisedButton label="Save" type="submit"/>
				</form>
			</div>
		);
	}
});

export default Settings;

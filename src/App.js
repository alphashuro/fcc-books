import React, { Component } from 'react';
import { Route } from 'react-router';

const Page = () => <div>asdf</div>;

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<Route exact path="/" component={Page} />
			</div>
		);
	}
}

export default App;

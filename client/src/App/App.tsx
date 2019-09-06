import React from 'react';
import Login from '../Forms/Login/Login';
import Clock from '../Clock/Clock';
import Register from '../Forms/Register/Register';

export interface Props {

}

export interface State {
	isLoggedIn: boolean;
	isRegistering: boolean;
}

export default class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			isRegistering: false
		}

		this.handleStateChange = this.handleStateChange.bind(this);
	}

	handleStateChange(e: React.MouseEvent) {
		this.setState({
			isRegistering: this.state.isRegistering ? false : true
		});
	}
	
	render() {
		let content = <Clock />;
		if (!this.state.isLoggedIn) {
			content = <Login stateChange={this.handleStateChange} />;
			if (this.state.isRegistering) {
				content = <Register stateChange={this.handleStateChange} />;
			}
		}

		return (
			<div className="app">
				{content}
			</div>
		);
	}
}

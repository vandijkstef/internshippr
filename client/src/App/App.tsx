import React from 'react';
import Clock from '../Clock/Clock';
import { default as Form, FormTypes } from '../Forms/Form';

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
			content = <Form type={FormTypes.Login} stateChange={this.handleStateChange} />;
			if (this.state.isRegistering) {
				content = <Form type={FormTypes.Register} stateChange={this.handleStateChange} />;
			}
		}

		return (
			<div className="app">
				{content}
			</div>
		);
	}
}

import React from 'react';
// QUESTION: Why doesn't this work?
// import { ToggleRegisterLogin as Toggle } from '../Components/ToggleRegisterLogin';
import ToggleRegisterLogin from '../Components/ToggleRegisterLogin';

export interface Props {
	stateChange: React.MouseEventHandler;
}

export interface State {
	username: string,
	password: string,
}

export default class Login extends React.Component<Props, any> {
	
	constructor(props: Props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		// QUESTION:
		// This doesn't work when I use my interface LoginState
		// Obviously, it can't type-check, but can it be done (partially) dynamic?
		this.setState({
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	}

	// QUESTION:
	// Use case: e.target.submit()
	// This works with React.ChangeEvent<HTMLFormElement>, but it's not really a 'Change'
	handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		console.log(`Partymode!`, this.state);
		e.target.submit();
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<label>
					Username
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
				</label>
				<label>
					Password
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
				</label>
				<ToggleRegisterLogin stateChange={this.props.stateChange} isOnLogin={true} />
				<input type="submit"/>
			</form>
		)
	}
}
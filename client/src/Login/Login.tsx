import React from 'react';

export interface Props {

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

	handleChange(e: any) {
		// QUESTION:
		// This doesn't work when I use my interface LoginState
		// Obviously, it can't type-check, but can it be done (partially) dynamic?
		this.setState({
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	}

	handleSubmit(e: any) {
		console.log(`Partymode!`, this.state);
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
				<input type="submit"/>
			</form>
		)
	}
}

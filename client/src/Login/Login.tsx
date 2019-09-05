import React from 'react';

interface LoginState {
	username: string,
	password: string,
	error?: Error
}

class Login extends React.Component<{}, any> {
	
	constructor(props: {}) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e: any) {
		const theTarget = e.target as HTMLInputElement;
		const newState: any = {};
		newState[theTarget.name] = theTarget.value;
		console.log(newState);
		this.setState(newState);
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
					<input type="password" name="password" onChange={this.handleChange} />
				</label>
				<input type="submit"/>
			</form>
		)
	}
}

export default Login;
import React from 'react';
import { State as LoginState } from '../Login/Login';
import ToggleRegisterLogin from '../Components/ToggleRegisterLogin';

export interface Props {
	stateChange: React.MouseEventHandler;
}

export interface State extends LoginState {
	email: string
}

export default class Register extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			email: ''
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	}

	handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		console.log('Wow Classic', this.state);
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
					E-mail
					<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
				</label>
				<label>
					Password
					<input type="password" name="password" value={this.state.password} autoComplete="new-password" onChange={this.handleChange} />
				</label>
				<ToggleRegisterLogin stateChange={this.props.stateChange} isOnLogin={false} />
				<input type="submit"/>
			</form>
		)
	}
}
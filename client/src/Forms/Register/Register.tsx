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
	}

	handleSubmit() {

	}

	handleChange() {

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
					{/* QUESTION: Apparently Im not allowed to add `autocomplete="new-password" -> WHY?! */}
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
				</label>
				<ToggleRegisterLogin stateChange={this.props.stateChange} isOnLogin={false} />
				<input type="submit"/>
			</form>
		)
	}
}
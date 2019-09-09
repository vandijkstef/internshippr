import React from 'react';
import { State as LoginState, Props } from '../Login/Login';
import { default as Toggle } from '../Components/ToggleRegisterLogin';

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
			<div className="wrapper" >
				<label>
					Username
					<input
						type="text"
						name="username"
						autoComplete="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					E-mail
					<input
						type="email"
						name="email"
						autoComplete="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						value={this.state.password}
						autoComplete="new-password"
						onChange={this.handleChange}
					/>
				</label>
				<Toggle
					stateChange={this.props.stateChange}
					isOnLogin={false}
				/>
				<input type="submit"/>
			</div>
		)
	}
}
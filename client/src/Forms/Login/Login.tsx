import React from 'react';
import { default as Toggle } from '../Components/ToggleRegisterLogin';

export interface Props {
	stateChange: React.MouseEventHandler;
}

export interface State {
	username: string,
	password: string,
	[key: string]: string | boolean
}

export default class Login extends React.Component<Props, State> {
	
	// constructor(props: Props) {
	// 	super(props);

	// 	this.state = {
	// 		username: '',
	// 		password: ''
	// 	}

	// }

	public state: State = {
		username: '',
		password: ''
	};
	
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			[e.currentTarget.name]: e.target.value
		});
	};

	handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		console.log(`Partymode!`, this.state);
		e.target.submit();
		e.preventDefault();
	};

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
				<Toggle stateChange={this.props.stateChange} isOnLogin={true} />
				<input type="submit"/>
			</form>
		)
	}
}

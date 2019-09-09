import React from 'react';
import { default as Toggle } from '../Components/ToggleRegisterLogin';

export interface Props {
	stateChange: React.MouseEventHandler;
	handleChange: React.ChangeEvent;
}

export interface State {

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

	handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		console.log(`Partymode!`, this.state);
		e.target.submit();
		e.preventDefault();
	};

	render() {
		return (
			<div className="wrapper">
				<label>
					Username
					<input
						type="text"
						name="username"
						autoComplete="username"
						value={this.state.username} onChange={this.props.handleChange}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						autoComplete="current-password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</label>
				<Toggle
					stateChange={this.props.stateChange}
					isOnLogin={true}
				/>
				<input type="submit"/>
			</div>
		)
	}
}

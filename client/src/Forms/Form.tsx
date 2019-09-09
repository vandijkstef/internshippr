import React from 'react'
import Login from './Login/Login';
import Register from './Register/Register'

export enum FormTypes {
	Login = "Login",
	Register = "Register"
}

interface Forms {
	[key: string]: JSX.Element
}

export interface Props {
	type: FormTypes
	stateChange: React.MouseEventHandler
}

export interface State {
	currentForm: string;
	[key: string]: string | boolean
}

export default class Form extends React.Component<Props, State> {

	forms: Forms;

	constructor(props: Props) {
		super(props);
		this.forms = {
			Login: <Login
				stateChange={this.props.stateChange}
				handleChange={this.handleChange}
			/>,
			Register: <Register
				stateChange={this.props.stateChange}
				handleChange={this.handleChange}
			/>
		};
		this.state = {
			currentForm: ''
		}
	}

	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	}

	render() {
		let content = this.forms[this.props.type];
		return (
			<form onSubmit={this.handleSubmit}>
				{content}
			</form>	
		)
	}

}
import React from 'react'

export interface Props {
	isOnLogin: boolean;
	stateChange: React.MouseEventHandler
}

export interface State {
	// No state
}

export default class ToggleRegisterLogin extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			// Set default states
		}
	}

	render() {
		let other = 'Login';
		if (this.props.isOnLogin) {
			other = 'Register'
		}
		return (
			<button type="button" className="contrast inv" onClick={this.props.stateChange}>{`To ${other}`}</button>
		)
	}
}
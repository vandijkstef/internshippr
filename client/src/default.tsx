import React from 'react'

export interface Props {
	// No props
}

export interface State {
	// No state
}

export default class DEFAULT extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			// Set default states
		}
	}

	render() {
		return "I'm rendering defaultly";
	}
}
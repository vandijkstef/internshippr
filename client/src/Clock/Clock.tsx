import React from 'react';

interface ClockProps {
	date: Date
}

export default class Clock extends React.Component<{}, ClockProps> {
	
	constructor(props: {}) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	render() {
		return (
			<div>
				{this.state.date.toLocaleDateString()} | {this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}
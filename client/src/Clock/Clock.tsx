import React from 'react';

interface ClockProps {
	date: Date
}

export default class Clock extends React.Component<{}, ClockProps> {
	
	private timerID?: any; // NodeJS.Timeout should be here, but then clearInterval isn't accepting it. Not something I want to work out today

	constructor(props: {}) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.tick()
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				{this.state.date.toLocaleDateString()} | {this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}
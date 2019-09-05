import React from 'react';
import Login from '../Login/Login';
import Clock from '../Clock/Clock';

class App extends React.Component {
	render() {
		return (
		  <div className="app">
			  <Login />
			  <Clock />
		  </div>
		);
	}
}

export default App;

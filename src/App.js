import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProgramWithDev from './components/ProgramWithDev';
import Programs from './components/Programs';
import './App.css';

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path={'/'} component={Programs} />
					<Route exact path={'/programs/:id'} component={ProgramWithDev} />
				</Switch>
			</div>
		);
	}
}

export default App;

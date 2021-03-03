import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import InfoWithFormat from './components/InfoWithFormat';
import Programs from './components/Programs';
import './App.css';

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path={'/'} component={Programs} />
					<Route exact path={'/info/:id'} component={InfoWithFormat} />
				</Switch>
			</div>
		);
	}
}

export default App;

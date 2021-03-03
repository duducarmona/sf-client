import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';

class Programs extends PureComponent {
	state = {
		programs: [],
	};

	componentDidMount() {
		this.loadPrograms();
	}

	loadPrograms = () => {
		apiClient
			.getAllPrograms()
			.then(({ data }) => {
				this.setState({
					programs: data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { programs } = this.state;

		return (
			<div className="wrapper">
				<h1>Programs:</h1>
				<ul className='list-no-decoration'>
          {console.log('programs: ', programs)}
					{programs.map((program, index) => {
						const { title, version, short_description } = program;

						return (
							<li key={index} className='App-item'>
								<h2>{title}</h2>
                <p>{version}</p>
                <p>{short_description}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Programs;

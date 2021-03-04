import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';
import { Link } from 'react-router-dom';

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
				const { history } = this.props;

				console.log(error);
				history.push('/notFoundPage');
			});
	};

	render() {
		const { programs } = this.state;

		return (
			<div className="wrapper">
				<h1>Programs:</h1>
				<ul className="list-no-decoration">
					{programs.map((program, index) => {
						const { title, version, short_description, id } = program;

						return (
							<li key={index} className="App-item">
								<Link to={`/programs/${id}`}>
									<h2>{title}</h2>
									<p>{version}</p>
									<p>{short_description}</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Programs;

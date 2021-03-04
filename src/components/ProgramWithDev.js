import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';
import { Link } from 'react-router-dom';
import './ProgramWithDev.css';

class ProgramWithDev extends PureComponent {
	state = {
		progWithDev: {},
	};

	componentDidMount() {
		this.loadProgWithDev();
	}

	loadProgWithDev = () => {
		const { id } = this.props.match.params;

		apiClient
			.getProgramWithDev(id)
			.then(({ data }) => {
				this.setState({
					progWithDev: data,
				});
			})
			.catch(error => {
				const { history } = this.props;

				console.log(error);
				history.push('/notFoundPage');
			});
	};

	render() {
		const {
			title,
			version,
			short_description,
			url: programUrl,
			license,
			rating,
			thumbnail,
			total_downloads,
			compatible,
		} = this.state.progWithDev;

		let authorName = '';
		let authorUrl = '';

		if (this.state.progWithDev.author_info) {
			authorName = this.state.progWithDev.author_info.name;
			authorUrl = this.state.progWithDev.author_info.url;
		}

		return (
			<div className="wrapper">
				<div className="arrow-icon-container">
					<i className="material-icons arrow-icon" onClick={this.props.history.goBack}>
						arrow_back_ios_new
					</i>
				</div>
				<h1>
					{title} {version}
				</h1>
				<div className="App-item">
					<img src={thumbnail} alt={`${title} thumbnail`} className="thumbnail-img"></img>
					<p>{short_description}</p>
					<p>
						<b>Program URL: </b>
						<Link to={{ pathname: programUrl }} target="_blank" className="external-link">
							{programUrl}
						</Link>
					</p>
					<p>
						<b>License: </b>
						{license}
					</p>
					<p>
						<b>Rating: </b>
						{rating}
					</p>
					<p>
						<b>Author: </b>
						{authorName}
					</p>
					<p>
						<b>Author URL: </b>
						<Link to={{ pathname: authorUrl }} target="_blank" className="external-link">
							{authorUrl}
						</Link>
					</p>
					<p>
						<b>Total downloads: </b>
						{total_downloads}
					</p>
					<p>
						<b>Compatible:</b>
					</p>
					{compatible && (
						<ul className="compatible-list">
							{compatible.map((os, index) => {
								return <li key={index}>{os}</li>;
							})}
						</ul>
					)}
				</div>
			</div>
		);
	}
}

export default ProgramWithDev;

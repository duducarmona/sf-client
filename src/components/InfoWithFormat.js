import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';

class InfoWithFormat extends PureComponent {
  state = {
		info: {},
	};

	componentDidMount() {
		this.loadInfo();
	}

	loadInfo = () => {
		const { id } = this.props.match.params;

		apiClient
			.getInfoWithFormat(id)
			.then(({ data }) => {
				this.setState({
					info: data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<h1>Info:</h1>
			</div>
		);
	}
}

export default InfoWithFormat;

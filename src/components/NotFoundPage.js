import React, { PureComponent } from 'react';
import './NotFoundPage.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class NotFoundPage extends PureComponent {
	render() {
		return (
			<div className="NotFoundPage-wrapper">
				<div className="arrow-icon-container">
					<i
						className="material-icons arrow-icon"
						onClick={() => {
							this.props.history.push('/');
						}}
					>
						arrow_back_ios_new
					</i>
				</div>
				<h1>Sorry, this page doesn't exist</h1>
			</div>
		);
	}
}

NotFoundPage.propTypes = {
	history: PropTypes.object,
};

export default withRouter(NotFoundPage);

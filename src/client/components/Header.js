import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
	state = {
		isBackgroundBlack: true,
	};

	pressTheHeader = () => {
		this.setState({ isBackgroundBlack: !this.state.isBackgroundBlack });
	};

	render() {
		return (
			<header className={`global-header ${this.state.isBackgroundBlack ? 'black-background' : ''}`}
							onClick={this.pressTheHeader}> Welcome to the Best
				Project </header>
		);
	}
}

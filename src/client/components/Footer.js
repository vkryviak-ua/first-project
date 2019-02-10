import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component {
	state = {
		year: 2019,
	};

	addOneYear = () => {
		const {year} = this.state;
		this.setState({year: year + 1});
	};

	render() {
		const {year} = this.state;
		return (
			<footer className="global-footer" onClick={this.addOneYear}>
				© {year} Best Team. All rights reserved.
			</footer>
		);
	}
}

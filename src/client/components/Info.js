import React, {Component} from 'react';
import './info.css';

export default class Info extends Component {
	state = {
		valueInput: '',
		valueTextarea: ''
	}

	pushMe = () => {
		alert(`Hello ${this.state.valueInput}  You sad: ${this.state.valueTextarea}`);
	}

	changeValueInput = () => {
		this.setState({valueInput: event.target.value});
	}

	changeValueTextarea = () => {
		this.setState({valueTextarea: event.target.value});
	}

	render() {
		return (
			<aside className="global-info">
				<form onSubmit={this.pushMe}>
					New component Info.
					<div>Name</div>
					<div><input type="text" value={this.state.valueInput} onChange={this.changeValueInput}/></div>
					<div>Description</div>
					<div><textarea type="text" value={this.state.valueTextarea} onChange={this.changeValueTextarea}/></div>
					<div>
						<button type="submit" className="info-button" onClick={this.pushMe}> View</button>
					</div>
				</form>
			</aside>
		);
	}
}

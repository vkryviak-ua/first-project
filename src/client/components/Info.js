import React, {Component} from 'react';
import './info.css';

export default class Info extends Component {
	state = {
		name: '',
		description: ''
	};

	pushMe = () => {
		alert(`Hello ${this.state.name}.  You sad: ${this.state.description}`);
	};

	changeNameHandler = () => {
		this.setState({name: event.target.value});
	};

	changeDescriptionHandler = () => {
		this.setState({description: event.target.value});
	};

	render() {
		return (
			<aside className="global-info">
				<form onSubmit={this.pushMe}>
					New component Info.
					<div>Name</div>
					<div><input type="text" value={this.state.name} onChange={this.changeNameHandler}/></div>
					<div>Description</div>
					<div><textarea value={this.state.description} onChange={this.changeDescriptionHandler}/></div>
					<div>
						<button type="submit" className="info-button" onClick={this.pushMe}> View</button>
					</div>
				</form>
			</aside>
		);
	}
}

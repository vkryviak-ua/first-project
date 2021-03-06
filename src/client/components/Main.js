import React, { Component } from 'react';
import ReactImage from '../react.png';
import './main.css';
import Article from './Article';

const dateAndTime = new Date();
const year = dateAndTime.getFullYear();
const mount = dateAndTime.getMonth() + 1;
const day = dateAndTime.getDate();
const hour = dateAndTime.getHours();
const minutes = dateAndTime.getMinutes();

export default class Main extends Component {
	state = {
		username: null,
		showTextAfterImage: false,
	};

	pressTheImage = () => {
		const {showTextAfterImage} = this.state;
		this.setState({ showTextAfterImage: !showTextAfterImage });
	};

	componentDidMount() {
		fetch('/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({ username: user.username }));
	}

	render() {
		const { username } = this.state;
		return (
			<main className="global-main">
				<div className="dateAndTime"> {`${year}-${mount}-${day} ${hour}:${minutes}`} </div>
				{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
				<img className="main-img" src={ReactImage} alt="react" onClick={this.pressTheImage}/>
				{this.state.showTextAfterImage && <div>You have pressed on image</div>}
				<Article/>
			</main>
		);
	}
}

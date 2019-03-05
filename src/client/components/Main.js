import React, { Component } from 'react';
import ReactImage from '../react.png';
import './main.css';
import Article from './Article';

let dateAndTime = new Date();
let year = dateAndTime.getFullYear();
let mount = dateAndTime.getMonth()+1;
let day = dateAndTime.getDate();
let hour = dateAndTime.getHours();
let minutes = dateAndTime.getMinutes();
export default class Main extends Component {
	state = {
		username: null,
		showTextAfterImage: false,
	};

	pressTheImage = () => {
		this.setState({ showTextAfterImage: true });
	};

	componentDidMount() {
		fetch('/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({ username: user.username }));
	}

	render() {
		const { username, showTextAfterImage } = this.state;
		return (
			<main className="global-main">
				{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
				{/*<div className="dateAndTime"> {`${dateAndTime}`} </div>*/}
				<div className="dateAndTime"> {`${year}-${mount}-${day} ${hour}:${minutes}`} </div>
				<img className="main-img" src={ReactImage} alt="react" onClick={this.pressTheImage}/>
				{showTextAfterImage ? <div>You have pressed on image</div> : ''}
				<Article/>
			</main>
		);
	}
}

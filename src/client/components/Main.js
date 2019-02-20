import React, {Component} from 'react';
import ReactImage from '../react.png';
import './main.css';
import Article from './Article';

export default class Main extends Component {
	state = {
		username: null,
		showTextAfterImage: false,
	};

	pressTheImage = () => {
		this.setState({showTextAfterImage: true});
	};

	componentDidMount() {
		fetch('/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({username: user.username}));
	}

	render() {
		const {username, showTextAfterImage} = this.state;
		return (
			<main className="global-main">
				{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
				<img className="main-img" src={ReactImage} alt="react" onClick={this.pressTheImage}/>
				{showTextAfterImage ? <div>{'You have pressed on image'}</div> : ''}
				<Article/>
			</main>
		);
	}
}

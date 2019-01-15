import React, { Component } from 'react';
import ReactImage from '../react.png';
import './main.css';
export default class Main extends Component {
    state = { username: null };

    componentDidMount() {
        fetch('/api/getUsername')
          .then(res => res.json())
          .then(user => this.setState({ username: user.username }));
    }
    render() {
        const { username } = this.state;
        return (
          <main className="global-main">
                {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
                <img className="main-img" src={ReactImage} alt="react" />
          </main>
        );
    }
}

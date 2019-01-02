import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <Menu/>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
        <Main/>
        <Footer/>
      </div>
    );
  }
}

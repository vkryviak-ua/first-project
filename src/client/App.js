import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = {
    username: null,
    name:'Google',
    url:'http://google.com.ua',
  };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const {username,name,url} = this.state;
    return (
      <div>
        {username ? <div><h1>Hello {username}</h1>  <p>Hello</p></div> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
        <p className="main-link"> - <a href={url}>{name}</a></p>
      </div>
    );
  }
}

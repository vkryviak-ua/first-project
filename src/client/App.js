import React, { Component } from 'react';
import './app.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Main/>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

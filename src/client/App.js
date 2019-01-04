import React, { Component } from 'react';
import './app.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Menu/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}

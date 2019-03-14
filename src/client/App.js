import React, { Component } from 'react';
import './reset.css';
import './app.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';
import Header from './components/Header';
import Info from './components/Info';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Menu/>
        <Main/>
        <Info/>
        <Footer/>
      </React.Fragment>
    );
  }
}

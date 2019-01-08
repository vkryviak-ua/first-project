import React, { Component } from 'react';
import './header.css';
import We_The_Best_logo from '../image/We_The_Best_logo.png';

export default class Header extends Component {
  render() {
    return (
      <header className="main-greeting"> Welcome to the Best Project <img className="header-img"
                                                                          src={We_The_Best_logo}
                                                                          alt="We_The_Best_logo"/>
      </header>
    );
  }
}

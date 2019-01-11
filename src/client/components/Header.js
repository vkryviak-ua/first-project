import React, { Component } from 'react';
import './header.css';
import Link256 from '../assets/link-256.png'

export default class Header extends Component {
    render() {
        return (
            <header className="main-greeting"> Welcome to the Best Project
                <img className="header-img" src={Link256} alt="simpleImg"/>
            </header>
        );
    }
}

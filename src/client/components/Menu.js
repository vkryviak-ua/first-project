import React, { Component } from 'react';
import "./menu.css";

export default class Menu extends Component {
  state = {
    items: [
      {name: 'First link', url: 'https://www.google.com.ua/'},
      {name: 'Second link', url: 'https://mail.google.com/mail/ca/u/1/#inbox'},
      {name: 'Third link', url: 'https://www.youtube.com/watch?v=-W1Bb0hUDto'},
      {name: 'Fourth link', url: 'https://www.linkedin.com/feed/'},
      {name: 'Fifth link', url: 'https://list.in.ua/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2'},
    ],
  };
	clickOnMe = () => {
		alert('You are awesome')
	};
  render() {
    const {items} = this.state;
    return (
      <menu className = "global-menu">
        <p>Menu</p>
        {
          items.map((item,index) => <p key={index}><a href={item.url}>{item.name}</a></p> )
        }
				<button className="main-button" onClick={this.clickOnMe}>
					Click on me
				</button>
      </menu>
    );
  }
}

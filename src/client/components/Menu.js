import React, { Component } from 'react';

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

  render() {
    const {items} = this.state;

    return (
      <div>
        {
          items.map(item => <p>  <a className='link-menu' href={item.url}>{item.name}</a></p> )
        }
      </div>
    );
  }
}

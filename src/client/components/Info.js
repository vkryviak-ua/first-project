import React, { Component } from 'react';
import './info.css';

export default class Info extends Component {
  render() {
    return (
      <aside className="global-info">
        New component Info.
      <div>Name</div>
      <div><input></input></div>
      <div>Description</div>
      <div><textarea></textarea></div>
      <div><button onClick={this.View}> View </button></div>
      </aside>
    );
  }
}

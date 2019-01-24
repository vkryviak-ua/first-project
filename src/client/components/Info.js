import React, { Component } from 'react';
import './info.css';

export default class Info extends Component {
  render() {
    function View() {
    }
    return (
      <aside className="global-info">
        New component Info.
      <div>
        <h4>Name</h4>
        <input></input>
      </div>
      <div>
        <h4>Description</h4>
        <textarea></textarea>
        <button onClick={this.View}> View </button>
      </div>
      </aside>
    );
  }
}

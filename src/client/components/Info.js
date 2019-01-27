import React, { Component } from 'react';
import './info.css';

export default class Info extends Component {
  render() {
    function pushMe() {
      alert("This is a form");
    }
    return (
      <aside className="global-info">
        New component Info.
      <div>Name</div>
      <div><input/></div>
      <div>Description</div>
      <div><textarea></textarea></div>
      <div><button className="info-button" onClick={pushMe}> View </button></div>
      </aside>
    );
  }
}

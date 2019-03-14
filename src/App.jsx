import React, { Component } from "react";
import avatar from "./assets/ssln.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>这是个简单的app</h1>
        <img src={avatar} alt="avatar" />
      </div>
    );
  }
}

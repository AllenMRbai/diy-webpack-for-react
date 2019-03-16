import React, { Component } from "react";
import avatar from "./assets/ssln.jpg";
import { connect } from "react-redux";
import { increaseAge } from "./store/user.redux";

class App extends Component {
  render() {
    return (
      <div>
        <h1>这是个简单的app</h1>
        <img src={avatar} alt="avatar" />
        <h2>
          姓名：{this.props.name} 年龄：{this.props.age}
        </h2>
        <button onClick={this.props.increaseAge}>增加年龄</button>
      </div>
    );
  }
}

App = connect(
  state => state.user,
  {
    increaseAge
  }
)(App);

export default App;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import UserCenter from "../pages/UserCenter";

let navList = [
  { path: "/main/home", title: "首页" },
  { path: "/main/shoppingCart", title: "购物车" },
  { path: "/main/userCenter", title: "个人中心" }
];

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          style={{ position: "fixed", top: 0, left: 0, right: 0 }}
          navList={navList}
          onChange={path => this.props.history.push(path)}
          value={this.props.location.pathname}
        />
        <Switch>
          <Route path="/main/home" component={Home} />
          <Route path="/main/shoppingCart" component={ShoppingCart} />
          <Route path="/main/userCenter" component={UserCenter} />
        </Switch>
      </React.Fragment>
    );
  }
}

import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import UserCenter from "../pages/UserCenter";

const navList = [
  { path: "/main/home", title: "首页" },
  { path: "/main/shoppingCart", title: "购物车" },
  { path: "/main/userCenter", title: "个人中心" }
];

function Dashboard(props) {
  const { history, location } = props;
  return (
    <Fragment>
      <NavBar
        style={{ position: "fixed", top: 0, left: 0, right: 0 }}
        navList={navList}
        onChange={path => history.push(path)}
        value={location.pathname}
      />
      <Switch>
        <Route path="/main/home" component={Home} />
        <Route path="/main/shoppingCart" component={ShoppingCart} />
        <Route path="/main/userCenter" component={UserCenter} />
      </Switch>
    </Fragment>
  );
}

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Dashboard;

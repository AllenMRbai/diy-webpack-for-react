import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import NotFound from "./pages/NotFound";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/main" component={Dashboard} />
          <Redirect path="/" exact to="/main/home" />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

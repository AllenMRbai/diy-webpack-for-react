import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Dashboard from "./layouts/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/main" component={Dashboard} />
        <Redirect from="/" exact to="/main/home" />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default hot(App);

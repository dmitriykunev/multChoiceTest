import App from "./App.js";
import Content from "./components/Tests";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/tests" component={Tests} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  )};

export default AppRouter;
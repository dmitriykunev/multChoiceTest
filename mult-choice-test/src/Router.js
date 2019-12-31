import App from "./App.js";
import Tests from "./components/Tests";
import Form from "./components/Form";
import Result from "./components/Result";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/test" component={Tests} />
          <Route path="/form" component={Form} />
          <Route path="/result" component={Result} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  )};

export default AppRouter;
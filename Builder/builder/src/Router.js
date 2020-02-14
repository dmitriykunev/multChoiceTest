import App from "./App";
import BuilderForm from "./components/buildForm";
import MainAdminDashboard from "./components/mainAdminDashboard";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/whoTheFuckAreYou" component={Login} />
          <Route path="/builder" component={BuilderForm} />
          <Route path="/admin" component={MainAdminDashboard} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

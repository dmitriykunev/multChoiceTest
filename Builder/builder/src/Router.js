import App from "./App";
import BuilderForm from "./components/buildForm";
import MainAdminDashboard from "./components/mainAdminDashboard";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ isAllowed, ...props }) => isAllowed
  ? <Route {...props} />
  : <Redirect to="/whoTheFuckAreYou" />;

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const isUserVerified = (token, username) => {
  if (token && username)
  {
    return true;
  } return false;
}

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/whoTheFuckAreYou" component={Login} />
          <ProtectedRoute isAllowed={isUserVerified(token, username)} exect path="/builder" component={BuilderForm} />
          <ProtectedRoute isAllowed={isUserVerified(token, username)} exect path="/admin" component={MainAdminDashboard} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

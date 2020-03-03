import React, { Component } from "react";
import MainAdminDashboard from "./components/mainAdminDashboard";
import "./index.css";
import { connect } from "react-redux";
import DataTransactions from "./components/dataTransaction";
import { Button } from "@material-ui/core";

const mapStateToProps = state => {
  return {
    username: state.username,
    token: state.token,
    role: state.role
  };
};

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const payload = {
  username: username,
  token: token
};
//function async identityCheck (payload) {
//return await DataTransactions.token(payload);
//};
//const authState = identityCheck(payload);

//console.log(authState);

class App extends Component {
  constructor(props) {
    super(props);
    // console.log("First me!");
    setTimeout(() => {}, 3000);
    // console.log("Another me in 3 sec!");
    DataTransactions.token(payload).then(authState => {
      if (!authState.data[0].token) {
        this.props.dispatch({
          type: "TOKEN_FAIL"
        });
        //this.props.history.push("/whoTheFuckAreYou");
      } else {
        const data = authState.data[0];

        this.props.dispatch({
          type: "TOKEN_OK",
          data
        });
      }
    });
  }

  handleFail = () => {
    this.props.history.push("/whoTheFuckAreYou");
  };

  render() {
    if (this.props.token) {
      return (
        <div>
          <MainAdminDashboard />
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            You are not authorized. Please introduce yourself to the system!
          </h1>
          <br />
          <Button name="Login" onClick={this.handleFail()}>
            Представиться системе
          </Button>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(App);

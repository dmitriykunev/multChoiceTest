import React, { Component } from "react";
import AdminPanel from "./components/panel.js";
import Footer from "./components/footer";
import "./index.css";
import { connect } from "react-redux";
import DataTransaction from "./components/dataTransaction";

const mapStateToProps = state => {
  return state;
};

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const data = {
      username: username,
      token: token
    };
    async function validate(data) {
      let result = [];
      try {
        result = await DataTransaction.token(data);
      } catch (e) {
        props.history.push("/whoTheFuckAreYou");
      }
      return result;
    }

    if (validate(data)) {
      this.props.history.push("/");
    }
  }

  // localStorage.setItem('token', this.state.token);

  render() {
    return (
      <div>
        <AdminPanel />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

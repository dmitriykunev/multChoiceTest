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
    let data = {
      username: username,
      token: token
    };

    async function validate(data) {
      let payload = [];
      try {
        payload = await DataTransaction.token(data);
      } catch (e) {
        props.history.push("/whoTheFuckAreYou");
      }
      return payload;
    }
    const { result } = validate(data);
    console.log(result);
    if (result) {
      props.dispatch({
        type: "INITIATE_APPLICATION",
        result
      });
      const render = <div>
        <AdminPanel />
        <Footer />
      </div>
      // props.history.push("/");
    } else {
      props.history.push("/whoTheFuckAreYou");
    }
  }

  render()
  {
    console.log(result);
    return (
      // <div>
      //   <AdminPanel />
      //   <Footer />
      // </div>
    );
  }
}

export default connect(mapStateToProps)(App);

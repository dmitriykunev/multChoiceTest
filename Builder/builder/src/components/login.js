import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./form.js";

const mapStateToProps = state => {
  return {
    username: state.username,
    role: state.role,
    token: state.token
  };
};
// const token = localStorage.getItem('token');

class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(this.props.token);
  //   if (props.token) {
  //     props.history.push("/admin");
  //   }
  // }
  render() {
    return (
      <div className="main">
        <Form {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);

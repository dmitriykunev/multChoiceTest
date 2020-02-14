import React, { Component } from "react";
import AdminPanel from "./panel.js";
import Footer from "./footer";
import "../index.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    sidebarItemChosen: state.sidebarItemChosen,
    username: state.username,
    role: state.role,
    token: state.token
  };
};

class MainAdminDashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <AdminPanel {...this.props} />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MainAdminDashboard);
//export default MainAdminDashboard;

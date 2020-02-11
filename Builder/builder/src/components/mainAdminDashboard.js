import React, { Component } from "react";
import AdminPanel from "./panel.js";
import Footer from "./footer";
import "../index.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return state;
};

class MainAdminDashboard extends Component {
  render() {
    return (
      <div>
        <AdminPanel />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MainAdminDashboard);

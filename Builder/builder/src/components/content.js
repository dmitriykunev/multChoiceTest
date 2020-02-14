import React, { Component } from "react";
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

class Content extends Component {
  handleContent = value => {
    switch (value) {
      case "Dashboad":
        return <div>THis is Dashboard</div>;
      case "Inbox":
        return <div>This is Inbox</div>;
      case "New":
        return <div>THis is New</div>;
      case "Cards":
        return <div>This is Cards</div>;
      default:
        return <div>THis is Dashboard</div>;
    }
  };
  render() {
    const content = this.props.sidebarItemChosen;
    return <div className="content">{this.handleContent(content)}</div>;
  }
}

export default connect(mapStateToProps)(Content);

import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import Cards from "./content/cards";

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
        return <div>This is Dashboard</div>;
      case "Inbox":
        return <div>This is Inbox</div>;
      case "New":
        return <div>This is New</div>;
      case "Cards":
        return (
          <div>
            <Cards />
          </div>
        );
      default:
        return <div>Default View</div>;
    }
  };
  render() {
    const content = this.props.sidebarItemChosen;
    return <div className="content">{this.handleContent(content)}</div>;
  }
}

export default connect(mapStateToProps)(Content);

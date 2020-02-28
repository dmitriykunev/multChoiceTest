import React, { Component } from "react";
import "../../index.css";
import { connect } from "react-redux";
import DetailedExpansionPanel from "./expansion-card";

const mapStateToProps = state => {
  return {
    cards: state.cards,
    role: state.role
  };
};

class Cards extends Component {
  handleCardsRepo = () => {
    return <DetailedExpansionPanel />;
  };
  render() {
    return <div>{this.handleCardsRepo()}</div>;
  }
}

export default connect(mapStateToProps)(Cards);

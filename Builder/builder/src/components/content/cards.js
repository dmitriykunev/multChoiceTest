import React, { Component } from "react";
import "../../index.css";
import { connect } from "react-redux";
import CardElement from "./expansion-card";
import SimpleSelect from "./select";

const mapStateToProps = state => {
  return {
    level: state.level,
    cards: state.cards,
    role: state.role
  };
};

class Cards extends Component {
  // constructor(props)
  // {
  //   return props.cards.filter((card) => card.level === props.level);
  // }
  handleCardsRepo = level => {
    if (this.props.role === "admin") {
      return this.props.cards.map(card => {
        return <CardElement card={card} />;
      });
    } else {
      return <div> У вас нет прав для просмотра и редактирования раздела</div>;
    }
  };
  render() {
    return (
      <div>
        <SimpleSelect {...this.props} />
        {this.handleCardsRepo(this.props.level)}
      </div>
    );
    // return <div>{this.handleCardsRepo()}</div>;
  }
}

export default connect(mapStateToProps)(Cards);

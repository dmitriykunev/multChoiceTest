import React from "react";
import "../../index.css";

export default function CardElement(arg) {
  console.log(arg);
  const { card } = arg;
  return (
    <div>
      <div className="cardListSectionAB">
        <div className="cardListSectionA">
          <div className="questionList">{card.question}</div>
          <div className="answerList">Correct answer: {card.answer}</div>
        </div>
        <div className="cardListSectionB">
          <div className="optionAList">A. {card.option_a}</div>
          <div className="optionBList">B. {card.option_b}</div>
          <div className="optionCList">C. {card.option_c}</div>
          <div className="optionDList">D. {card.option_d}</div>
        </div></div>
      <div className="cardListSectionC">
        <div className="levelList">Level: {card.level}</div>
        <div className="theoryList">Theoretical part: {card.theory}</div>
      </div>
    </div>
  );
}

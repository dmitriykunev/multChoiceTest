import React from "react";
import "../../index.css";

export default function CardElement(card) {
  console.log(card);
  const { cardElement } = card;
  return (
    <div className="cardList">
      <div className="questionList">{cardElement.question}</div>
    </div>
  );
}

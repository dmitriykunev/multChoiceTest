import React from "react";
import "../../index.css";

export default function CardElement(card) {
  return <div key={card.id}>{card}</div>;
}

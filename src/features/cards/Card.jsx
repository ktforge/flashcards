import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  // all cards in the store, then pick out the one this component was given
  const cards = useSelector(selectCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}

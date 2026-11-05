import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  // all cards in the store, then pick out the one this component was given
  const cards = useSelector(selectCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {/* each click flips between the front and back text */}
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}

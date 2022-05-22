import React, { useState } from "react";
import CardItem from "./CardItem";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.jpg";
import card6 from "../img/card6.jpg";
import card7 from "../img/card7.jpg";
import card8 from "../img/card8.jpg";
import "./cards.css";

export default function Cards() {
  const [card, setCard] = useState([
    {
      imgSrc: card1,
      overlay: "Discover Auckland",
    },
    {
      imgSrc: card2,
      overlay: "Wander Wellington",
    },
    {
      imgSrc: card3,
      overlay: "Discover Queenstown",
    },
    {
      imgSrc: card4,
      overlay: "Visit Rotorua & Taupo",
    },
    {
      imgSrc: card5,
      overlay: "Explore Christchurch",
    },
    {
      imgSrc: card6,
      overlay: "Vist the Bay of Islands",
    },
    {
      imgSrc: card7,
      overlay: "North Island Getaways",
    },
    {
      imgSrc: card8,
      overlay: "South Island Getaways",
    },
  ]);
  return (
    <div>
      <div className="container-me">
        <div className="continer-grid">
          {card.map((card, index) => {
            return <CardItem key={index} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
}

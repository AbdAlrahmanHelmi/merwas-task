import React from "react";
import explore from "../img/explore.png";
import exploreSmall from "../img/exploreSmall.png";
import "./home.css";

export default function Home() {
  return (
    <div className="container-me to-margin">
      <img src={explore} className="img-fluid d-explore" alt="explore" />
      <img
        src={exploreSmall}
        className="img-fluid d-exploreSmall"
        alt="explore-small"
      />

      <h3 className="p-text ">
        Explore New Zealand - <span className="text-auc">Auckland </span>
      </h3>
    </div>
  );
}

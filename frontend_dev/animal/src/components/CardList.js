import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card.js";
import axios from "axios";

const CardList = ({ cards }) => {
  return (
    <div id="card-list">
      <div>
        {cards.map((card) => (
          <div className="col">
            <Card card={card} key={card.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

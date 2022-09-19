import React from "react";
import "./CardList.css";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";

function CardList() {
  return (
    <div id="card-list">
      <div className="row row-cols-1 row-cols-md-3 g-4 ]">
        {[0, 1, 2, 3, 4, 5].map(() => (
          <div className="col">
            <Card className="card" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

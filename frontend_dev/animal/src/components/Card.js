import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import React from "react";

function BasicExample({ card }) {
  return (
    <ListGroup style={{ 'marginTop': '20px', 'width': '1000px' }}>
      <ListGroup.Item>
        <Link to={`/show-pet/detail/${card.id}`}
          state={{ isAuthor: card.isAuthor }}>{card.title} </Link>
        <p>작성자 : {card.user_nickname}</p>
      </ListGroup.Item>
    </ListGroup >
  );
}

export default BasicExample;

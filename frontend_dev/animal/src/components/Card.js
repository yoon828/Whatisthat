import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import React from "react";

function BasicExample({ card: { id, title, user_nickname } }) {
  // const id = card.id;
  // const title = card.title;
  // const user_nickname = card.user_nickname;
  return (
    <ListGroup style={{'marginTop':'20px', 'width': '1000px'}}>
      <ListGroup.Item>
        <Link to={`/show-pet/detail/${id}`}>{title} </Link>
        <p>작성자 : {user_nickname}</p>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default BasicExample;

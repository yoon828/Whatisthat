import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function BasicExample({ data: { id, title, user_nickname } }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to={`/show-pet/detail/${id}`}>{title}</Link>
        <Link to={`/userfeed/${user_nickname}`}>{user_nickname}</Link>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default BasicExample;

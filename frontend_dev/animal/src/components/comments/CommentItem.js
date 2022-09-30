import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CommentItem.css";
import CommentInput from "../../components/comments/CommentInput";
import Button from "react-bootstrap/Button";
import axios from "axios";

function CommentsItem({ item, isAuthor }) {
  const [editInput, setEditInput] = useState(false);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    // console.log(item);
  }, []);

  const deleteComment = async () => {
    axios
      .delete(`http://j7c101.p.ssafy.io:8080/api/show-pet/comment/${item.id}`)
      .then((res) => {
        console.log(res);
        alert("댓글이 삭제 되었습니다.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="comments">
      {editInput ? (
        <CommentInput item={item} />
      ) : (
        <div className="comments-content">
          <div className="comments-item">
            <div className="comments-item__username">{item.user_nickname}</div>
          </div>
          <div className="comments-discription">{item.content}</div>
          <Button variant="primary" onClick={() => setEditInput(false)}>
            취소
          </Button>
          <Button variant="primary" onClick={() => setEditInput(true)}>
            수정
          </Button>
          <Button variant="danger" onClick={() => deleteComment()}>
            삭제{" "}
          </Button>
        </div>
      )}
    </div>
  );
}

export default CommentsItem;

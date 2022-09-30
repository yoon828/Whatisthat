import React, { useEffect, useRef, useCallback } from "react";
import "./CommentInput.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

function CommentInput({ item }) {
  const commentRef = useRef();

  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    console.log(item);
    if (item) {
      console.log(item);
      commentRef.current.value = item.content;
    }
  }, []);

  //댓글 등록하기
  const submit = async () => {
    const content = commentRef.current.value;
    console.log(content);
    axios
      .post(`http://j7c101.p.ssafy.io:8080/api/show-pet/comment`, {
        content: content,
        id: item.id,
        user_id: "user_id",
      })
      .then((res) => {
        console.log(res);
        console.log("글 등록");
      })
      .catch((err) => console.log(err));
  };

  //댓글 수정하기
  const edit = async () => {
    const content = commentRef.current.value;
    console.log(content);
    axios
      .put(
        `http://j7c101.p.ssafy.io:8080/api/show-pet/comment`,
        {
          content: content,
          id: item.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("글 수정");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="comments-input">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="댓글을 작성해주세요"
          aria-describedby="basic-addon2"
          ref={commentRef}
        />
        {item ? (
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => edit()}
          >
            수정
          </Button>
        ) : (
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => submit()}
          >
            등록
          </Button>
        )}
      </InputGroup>
    </div>
  );
}

export default CommentInput;

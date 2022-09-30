import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./CommentInput.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { postShowpetComment } from "../../api/community";

function CommentInput({ item, comments, getComments }) {
  const [id, setId] = useState(0);
  const commentRef = useRef();
  const param = useParams();

  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    setId(param.id);
    if (item) {
      commentRef.current.value = item.content;
    }
  }, []);

  //댓글 등록하기
  const submit = async () => {
    try {
      const content = commentRef.current.value;
      const { data } = await postShowpetComment({
        content: content,
        id: id,
      });
      if (data.success) {
        alert("댓글이 등록되었습니다.");
        commentRef.current.value = "";
        getComments();
      }
    } catch (error) {
      console.log(error);
    }
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
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => submit()}
        >
          등록
        </Button>
      </InputGroup>
    </div>
  );
}

export default CommentInput;

import React, { useRef } from "react";
import "./ShowpetCreate.css";
import ShowpetEditor from "./ShowpetEditor";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowpetCreate() {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const imgsRef = useRef();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/show-pet",
      method: "post",
      headers: {
        Content_Type: "application/json",
        Token: accessToken,
        data: JSON.stringify({
          title: titleRef.current.value,
          content: contentRef.current.value,
          // imgs: imgsRef.current.value,
        }),
      },
    })
      .then((res) => {
        alert("글이 작성");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(`/show-pet/list`);
  }

  return (
    <form id="showpet-create" onSubmit={onSubmit}>
      <input
        ref={titleRef}
        className="show-title"
        type="text"
        placeholder="제목을 입력하세요"
      />
      <>
        <ShowpetEditor className="showpet-editor" />
      </>
      <button>작성완료</button>
    </form>
  );
}

export default ShowpetCreate;

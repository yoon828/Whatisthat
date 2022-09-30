import React, { useRef, useState } from "react";
import "./ShowpetCreate.css";
import ShowpetEditor from "./ShowpetEditor";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ShowpetCreate({ placeholder, value, ...rest }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imgsRef = useRef(null);
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];
  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  const [result, setResult] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    console.log(quillRef.current.value);
    setResult(quillRef.current.value);
    // axios({
    //   url: "http://j7c101.p.ssafy.io:8080/api/show-pet",
    //   method: "post",
    //   headers: {
    //     Content_Type: "application/json",
    //     Token: "",
    //     body: JSON.stringify({
    //       title: titleRef.current.value,
    //       content: contentRef.current.value,
    //       imgs: imgsRef.current.value,
    //     }),
    //   },
    // })
    //   .then((res) => {
    //     alert("글이 작성");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <form id="showpet-create" onSubmit={onSubmit}>
      <input
        ref={titleRef}
        className="show-title"
        type="text"
        placeholder="제목을 입력하세요"
      />

      <button>작성완료</button>
    </form>
  );
}

export default ShowpetCreate;

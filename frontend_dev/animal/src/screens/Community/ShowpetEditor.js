import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function ShowpetEditor({ placeholder, value, ...rest }) {
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
  return (
    <div id="showpet-create">
      <ReactQuill
        {...rest}
        placeholder="내용을 입력하세요"
        value={value || ""}
        theme="snow"
        modules={modules}
        formats={formats}
      ></ReactQuill>
    </div>
  );
}

export default ShowpetEditor;

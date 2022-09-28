import React from "react";
import "./ShowpetCreate.css";
import ShowpetEditor from "./ShowpetEditor";

function ShowpetCreate() {
  const chkForm = () => {};
  return (
    <div id="showpet-create">
      <input
        // ref={titleRef}
        className="show-title"
        type="text"
        placeholder="제목을 입력하세요"
      />
      <>
        <ShowpetEditor className="showpet-editor" />
      </>
      <div className="create-check">
        <button type="button" onClick={chkForm}>
          작성완료
        </button>
      </div>
    </div>
  );
}

export default ShowpetCreate;

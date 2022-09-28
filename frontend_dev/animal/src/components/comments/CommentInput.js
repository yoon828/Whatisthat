import React, { useState, useRef, useCallback } from "react";
import "./CommentInput.css";
import { useNavigate } from "react-router-dom";

function CommentInput({ articleIdx, changed, type }) {
  const navigate = useNavigate();
  const submit = async (e) => {
    if (e.key !== "Enter") {
      return inputRef.current?.focus();
    }
    // if (!isLoggedIn) {
    //   return navigate("/login");
    // }
    if (!inputRef.current?.value.trim()) {
      return inputRef.current?.focus();
    }
    if (!loading) {
      setLoading(true);
      const data = {
        postIdx: articleIdx,
        upIdx: 0,
        content: inputRef.current.value,
        bannerImg: commentImg.replace("data:image/jpeg;base64,", ""),
      };
      inputRef.current.disabled = true;
      await commentCreate(data, type);
      setLoading(false);
      changed();
      inputRef.current.value = "";
      setCommentImg("");
      inputRef.current.disabled = false;
    }
    return 0;
  };
  return (
    <div id="comments-input">
      <div className="comments-icon">
        <div className="comments-icon-wrapper">
          <img />
        </div>
      </div>
      <div className="comments-input-text">write comment</div>
      <div className="comments-send">
        <div className="comments-send-wrapper">
          <img />
        </div>
      </div>
    </div>
  );
}

export default CommentInput;

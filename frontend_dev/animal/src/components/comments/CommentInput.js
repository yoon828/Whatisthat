import React, { useState, useRef, useCallback } from "react";
import "./CommentInput.css";
import { useNavigate } from "react-router-dom";

function CommentInput({ articleIdx, changed, type }) {
  const navigate = useNavigate();

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

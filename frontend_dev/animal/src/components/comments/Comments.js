import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

function Comments({ comments }) {
  return (
    <div>
      {comments.map((item, idx) => {
        return <CommentItem isAuthor={true} item={item} key={idx} />;
      })}
    </div>
  );
}

export default Comments;

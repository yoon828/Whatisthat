import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

function Comments({ comments, getComments, nickname }) {

  return (
    <div>
      {comments.map((item, idx) => {
        return (
          <CommentItem
            isAuthor={item.user_nickname === nickname ? true : false}
            item={item}
            key={idx}
            getComments={getComments}
          />
        );
      })}
    </div>
  );
}

export default Comments;

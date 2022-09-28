import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

function Comments() {
  const [commentList, setCommentList] = useState();

  useEffect(() => {
    setCommentList();
  }, []);

  return (
    <div>
      {commentList.map((item) => {
        if (Object.keys(item)) {
          let isAuthor = false;
          if (item.userNickname === UserInfo?.nickname) {
            isAuthor = true;
          }
          return (
            <CommentItem
              isArticleAuthor={isArticleAuthor}
              isAuthor={isAuthor}
              type={type}
              info={item}
              key={item.idx}
              postIdx={postIdx}
              changed={changed}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Comments;

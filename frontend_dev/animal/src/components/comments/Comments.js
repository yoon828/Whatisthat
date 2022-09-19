import React, { useState, useEffect } from "react";

function Comments() {
  const [commentList, setCommentList] = useState();
  const UserInfo = useAppSelector((state) => state.auth.userInfo);

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
          if (item.upIdx) {
            return (
              <ReplyItem
                isArticleAuthor={isArticleAuthor}
                isAuthor={isAuthor}
                type={type}
                info={item}
                key={item.idx}
                changed={changed}
                postIdx={postIdx}
              />
            );
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

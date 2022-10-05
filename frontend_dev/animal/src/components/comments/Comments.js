import React, { useState, useEffect } from "react";
import { getUserInfo } from "../../api/user";
import CommentItem from "./CommentItem";

function Comments({ comments, getComments }) {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    getUserNickname();

  }, []);

  const getUserNickname = async () => {
    try {
      const { data } = await getUserInfo();
      setNickname(data.data.nickname);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      {comments.map((item, idx) => {
        return (
          <CommentItem
            isAuthor={item === nickname ? true : false}
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

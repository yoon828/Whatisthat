import React, { useState, useEffect } from "react";
import "./CommunityShowpetDetail.css";
import { useSelector } from "react-redux";
import Comments from "../../components/comments/Comments";
import CommentInput from "../../components/comments/CommentInput";
import { getShowList } from "../../api/community";
import CardList from "../../components/CardList";

function CommunityShowpet() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getShowListApi();
  }, []);

  const getShowListApi = async () => {
    try {
      const { data } = await getShowList();
      setList(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="showpet">
      <CardList cards={list} />
    </div>
  );
}

export default CommunityShowpet;

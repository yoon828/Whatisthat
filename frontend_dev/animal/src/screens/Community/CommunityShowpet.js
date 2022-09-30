import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CommunityShowpetDetail.css";
import { useSelector } from "react-redux";
import Comments from "../../components/comments/Comments";
import CommentInput from "../../components/comments/CommentInput";
import { getShowList } from "../../api/community";

function CommunityShowpet({ id }) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    getShowListApi();
  });

  const getShowListApi = async () => {
    const { data } = await getShowList();
    // console.log(data);
  };
  return <div id="showpet-detail"></div>;
}

export default CommunityShowpet;

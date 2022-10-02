import React, { useState, useEffect } from "react";
import { getLostList } from "../../api/community";
import LostDetail from "./LostDetail";

function LostDetailList() {
  const [lostList, setLostList] = useState([]);

  useEffect(() => {
    getLostListApi();
  }, []);

  const getLostListApi = async () => {
    try {
      const { data } = await getLostList();
      setLostList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="lost-list">
      <div className="row row-cols-1 row-cols-md-1 g-4">
        {lostList.map((lost) => (
          <div className="col">
            <LostDetail lost={lost} key={lost.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostDetailList;

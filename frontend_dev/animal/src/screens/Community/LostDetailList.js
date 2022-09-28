import React, { useState, useEffect } from "react";
import axios from "axios";
import LostDetail from "./LostDetail";

function LostDetailList(condition) {
  const [losts, setLosts] = useState([]);
  useEffect(() => {
    axios({
      url: "http://j7c101.p.ssafy.io:8080/api/lost/list",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        withCredentials: true,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="lost-detail-list">
      <div className="row row-cols-1 row-cols-md-1 g-4 ]">
        {losts.map((data) => (
          <div className="col">
            <LostDetail data={data} key={data.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostDetailList;

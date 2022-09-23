import React from "react";
import LostDetail from "./LostDetail";

function LostDetailList() {
  return (
    <div id="lost-detail-list">
      <div className="row row-cols-1 row-cols-md-1 g-4 ]">
        {[0, 1, 2].map(() => (
          <div className="col">
            <LostDetail />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostDetailList;

import React from "react";
import CommunityLostDetail from "../screens/Community/CommunityLostDetail";

function LostDetailList() {
  return (
    <div id="lost-detail-list">
      <div className="row row-cols-1 row-cols-md-3 g-4 ]">
        {[0, 1, 2, 3, 4, 5].map(() => (
          <div className="col">
            <CommunityLostDetail />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostDetailList;

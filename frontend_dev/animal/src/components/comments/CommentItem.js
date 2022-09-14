import React from "react";

function CommentsItem() {
  return (
    <div id="comments">
      <div className="comments-content">
        <div className="comments-head">
          <div className="comments-head__imgwrapper">
            <img />
          </div>
          <div className="comments-head__counts">3</div>
        </div>
        <div className="comments-body">
          <div className="comments-item">
            <div className="comments-item__imgwrapper">
              <img />
            </div>
            <div className="comments-item__username">username</div>
          </div>
          <div className="comments-discription">description</div>
          <div className="comments-like">like-dislike</div>
        </div>
      </div>
      <div className="comments-input"></div>
    </div>
  );
}

export default CommentsItem;

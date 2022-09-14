import React from "react";

function CommunityShowpetDetail() {
  return (
    <div id="showpet-detail">
      <div className="article">
        <div className="title">
          <p>title</p>
          <p>date</p>
          <p>nickname</p>
        </div>
        <div className="content">
          <div className="content-imgwrapper">
            <img />
          </div>
          <div className="content-description">content</div>
        </div>
      </div>
      <div className="comment flex column">
        <div className="comment-head">
          <p className="notoMid">
            댓글<span className="">{article.comment}</span>
          </p>
        </div>
        <div className="comment-input flex">
          <div className="input-img-container flex">
            <img
              src={
                UserInfo?.profileImg
                  ? `data:image/jpeg;base64,${UserInfo.profileImg}`
                  : UserDummyIcon
              }
              alt="dum"
              title="user-icon"
            />
          </div>
          <CommentInput />
        </div>
        {comment ? <Comments /> : null}
      </div>
    </div>
  );
}

export default CommunityShowpetDetail;

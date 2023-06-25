import React from "react";
import Posts from "../Posts/Posts";
import "./PostSide.css";

const PostSide = ({ location }) => {
  const postSideClassName = location === "profile" ? "PostSide homepage" : "PostSide";

  return (
    <div className={postSideClassName}>
      <Posts />
    </div>
  );
};

export default PostSide;

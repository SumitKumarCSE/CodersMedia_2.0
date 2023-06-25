import React, { useState } from "react";
import "./Post.css";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostsRequests";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  const renderDescription = () => {
    const hashtagsRegex = /#(\w+)/g;
    const result = data.desc.replace(
      hashtagsRegex,
      '<span style="color: blue;">#$1</span>'
    );
    return <div dangerouslySetInnerHTML={{ __html: result }} />;
  };
  
  
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        {renderDescription()}
      </div>
    </div>
  );
};

export default Post;

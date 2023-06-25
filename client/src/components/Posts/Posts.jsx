import React, { useEffect } from "react";
import { getTimelinePosts, getAllPosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!params.id) {
      dispatch(getAllPosts());
    } else {
      dispatch(getTimelinePosts(user._id)); 
    }
  }, [dispatch, params.id, user._id]);

  if (!posts) return "No Posts";
  return (
    <div className="Posts">
      {loading ? (
        "Fetching posts...."
      ) : (
        posts.map((post) => {
          return <Post data={post} key={post._id} />;
        })
      )}
    </div>
  );
};

export default Posts;

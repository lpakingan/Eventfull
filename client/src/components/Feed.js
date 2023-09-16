import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { StyledFeed } from "./styles/feed.styled";

const EventFeed = ({ posts, user_event_id }) => {
  const [postContent, setPostContent] = useState("");
  const [postId, setPostId] = useState("");
  const [showPostField, setPostField] = useState(false);
  const [showAddPost, setShowAddPost] = useState(true);
  const [showUpdateField, setUpdateField] = useState(false);
  const [showUpdatePost, setShowUpdatePost] = useState(true);
  const [postError, setPostError] = useState("");

  const [addPost] = useMutation(ADD_POST);
  const [removePost] = useMutation(REMOVE_POST);
  const [updatePost] = useMutation(UPDATE_POST);

  const { data, loading } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data?.me || [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostContent(value);
  };

  const handleAddPost = async (event) => {
    event.preventDefault();
    if (postContent.trim() !== "") {
      try {
        const { data } = await addPost({
          variables: {
            postData: {
              user: userData._id,
              username: userData.username,
              user_event: user_event_id,
              content: postContent,
            },
          },
        });

        console.log(data);
        setPostContent("");
        setPostField(false);
        setShowAddPost(true);

        window.location.reload();
      } catch (e) {
        console.error(e);
      }
    } else {
      setPostError("You cannot submit an empty post!");
    }
  };

  const handleRemovePost = async (postId, user_event_Id) => {
    try {
      const { data } = await removePost({
        variables: { post: postId, userEvent: user_event_Id },
      });

      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePost = async (event) => {
    event.preventDefault();
    if (postContent.trim() !== "") {
      try {
        const { data } = await updatePost({
          variables: {
            post: postId,
            newContent: postContent,
          },
        });

        console.log(data);
        setUpdateField(false);
        setPostContent("");
      } catch (error) {
        console.error(error);
      }
    } else {
      setPostError("You cannot update to an empty post!");
    }
  };

  return (
    <StyledFeed>
      {posts.map((post) => (
        <div className="post-container" key={post._id}>
          <p>
            <span>{post.user.username}</span> said:
          </p>
          <p>{post.content}</p>
          <p> {post.createdAt}</p>
          {userData.username === post.user.username && (
            <button
              className="delete-btn"
              onClick={() => handleRemovePost(post._id, post.user_event._id)}
            >
              Delete
            </button>
          )}
          {userData.username === post.user.username && (
            <button
              className="edit-btn"
              onClick={() => [
                setUpdateField(true),
                setShowUpdatePost(false),
                setPostId(post._id),
              ]}
            >
              Update
            </button>
          )}
        </div>
      ))}
      {showAddPost && (
        <div className="add-btn-container">
          <button
            className="add-btn"
            onClick={() => [setPostField(true), setShowAddPost(false)]}
          >
            Add Post
          </button>
        </div>
      )}

      {showPostField && (
        <div className="feed-post">
          <form onSubmit={handleAddPost}>
            <textarea
              type="text"
              placeholder="Add a post!"
              value={postContent}
              onChange={handleInputChange}
            />
            <button className="add-btn" type="submit">
              Submit Post
            </button>
            <div className="error-message">{postError}</div>
          </form>
        </div>
      )}

      {showUpdateField && (
        <div className="feed-post">
          <form onSubmit={(event) => handleUpdatePost(event, postId)}>
            <textarea
              type="text"
              value={postContent}
              onChange={handleInputChange}
            />
            <button className="add-btn" type="submit">
              Update Post
            </button>
            <div className="error-message">{postError}</div>
          </form>
        </div>
      )}
    </StyledFeed>
  );
};

export default EventFeed;

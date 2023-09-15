import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const EventFeed = ({ posts }) => {
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
              user_event: posts[0]?.user_event._id,
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
    <div className="Card">
      {posts.map((post) => (
        <div className="Card" key={post._id}>
          <h2>{post.user.username}</h2>
          <p>{post.content}</p>
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
        <button
          className="add-btn"
          onClick={() => [setPostField(true), setShowAddPost(false)]}
        >
          Add Post
        </button>
      )}

      {showPostField && (
        <div className="Card">
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
        <div className="Card">
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
    </div>
  );
};

export default EventFeed;

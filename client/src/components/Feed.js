import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const EventFeed = ({ posts }) => {
  const [postContent, setPostContent] = useState("");
  const [showPostField, setPostField] = useState(false);
  const [showAddPost, setShowAddPost] = useState(true);
  const [postError, setPostError] = useState("");

  const [addPost] = useMutation(ADD_POST);

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
      } catch (e) {
        console.error(e);
      }
    } else {
      setPostError("You cannot submit an empty post!");
    }
  };

  return (
    <div className="Card">
      {posts.map((post) => (
        <div className="Card" key={post._id}>
          <h2>{post.user.username}</h2>
          <p>{post.content}</p>
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
    </div>
  );
};

export default EventFeed;

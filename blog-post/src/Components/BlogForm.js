import React, { useState } from 'react';
import { useAddPostMutation, useGetPostsQuery } from '../store/api.js/blogPostApi';
const BlogForm = () => {
    const [postData, setPostData] = useState({ user: '', title: '', body: '' });
  const [addPost] = useAddPostMutation();
  const { refetch } = useGetPostsQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(postData);
    setPostData({ user: '', title: '', body: '' }); 
    refetch();
  };
  return (
    <div className="blog-form-card">
        <form onSubmit={handleSubmit} className="">
      <label  htmlFor="user">User:</label>
      <input
        type="text"
        id="user"
        value={postData.user}
        onChange={(e) => setPostData({ ...postData, user: e.target.value })}
        required
        className=""
      />
      <label  htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        required
        className=""
      />
      <label  htmlFor="body">Body:</label>
      <textarea
        id="body"
        value={postData.body}
        onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        required
        
      />
      <button type="submit">
        Submit
      </button>
    </form>
    </div>
  );
};

export default BlogForm
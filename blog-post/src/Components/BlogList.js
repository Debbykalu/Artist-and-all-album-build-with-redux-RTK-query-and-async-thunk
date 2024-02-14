
import React, { useState } from 'react';
import { useGetPostsQuery, useRemovePostMutation, useUpdatePostMutation  } from '../store/api.js/blogPostApi';

const BlogList = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();
    const [removePost] = useRemovePostMutation();
    const [updatePost] = useUpdatePostMutation ()

    const [editingPost, setEditingPost] = useState(null);

    const handleEditClick = (post) => {
        setEditingPost(post);
      };

      const handleUpdatePost = async (updatedPost) => {
        if (editingPost && editingPost.id) {
          await updatePost({ id: editingPost.id, ...updatedPost });
          setEditingPost(null);
        }
      };
  
    const handlePostRemove = (post) => {
      if (post && post.id) {
        removePost(post);
      } else {
        console.error("Post object or post.id is undefined.");
      }
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts.</p>;
  
    return (
      <div className="blog-list-card">
        <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
            <button onClick={() => handlePostRemove(post)}>Delete</button>
          <button className='edit' onClick={() => handleEditClick(post)}>Edit</button>

          {editingPost && editingPost.id === post.id && (
            <div>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
              />
              <textarea
                value={editingPost.body}
                onChange={(e) => setEditingPost({ ...editingPost, body: e.target.value })}
              />
              <button onClick={() => handleUpdatePost(editingPost)}>Save</button>
            </div>
          )}
          </article>
        ))}
      </div>
    );
  };
  
  export default BlogList;
  
  
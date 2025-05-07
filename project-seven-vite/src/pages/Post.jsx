import React from 'react'
import { useParams } from 'react-router-dom';
import posts from '../data/posts';

function Post() {
    const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <h2>Post not found</h2>;
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )
}

export default Post
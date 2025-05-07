import React from 'react'
import { Link } from 'react-router-dom';
import posts from '../data/posts';

function Blogs() {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
          <p>{post.content.substring(0, 50)}...</p>
        </div>
      ))}
    </div>
  )
}

export default Blogs
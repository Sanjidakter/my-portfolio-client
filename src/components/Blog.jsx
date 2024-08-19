import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', status: 'published' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });

  useEffect(() => {
    // Fetch the posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://simple-personal-portfolio-backend.vercel.app/api/contents');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value,type:'blog' }));
  };

  const handleAddBlog = async () => {
    try {
      const response = await fetch('https://simple-personal-portfolio-backend.vercel.app/api/contents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (response.ok) {
        const createdPost = await response.json();
        setPosts((prevPosts) => [...prevPosts, createdPost]);
        setIsModalOpen(false);
        setNewPost({ title: '', content: '', status: 'published' });
        setToast({ message: 'Blog added successfully!', type: 'success' });
      } else {
        setToast({ message: 'An error occurred.', type: 'danger' });
      }
    } catch (error) {
      console.error('Error adding blog post:', error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Blog</h1>
        <button type="button" className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Add Blog</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Content</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-base-200" : ""}>
                <th>{index + 1}</th>
                <td><Link to={`/blog/${post.title}`}>{post.title}</Link></td>
                <td>{post.content}</td>
                <td>{post.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Blog Modal */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Blog Post</h5>
                <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="type"
                    name="type"
                    value={newPost.type}
                    onChange={handleInputChange}
                    required
                  />
                  
                </div> */}
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={newPost.status}
                    onChange={handleInputChange}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddBlog}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

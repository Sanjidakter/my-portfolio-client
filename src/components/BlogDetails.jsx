import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { blogTitle } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState('');

  useEffect(() => {
    // Fetch the blog post details from the API using the blog title
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://simple-personal-portfolio-backend.vercel.app/api/contents`);
        const data = await response.json();
        const selectedPost = data.find(post => post.title === blogTitle);
        setPost(selectedPost);
        setUpdatedContent(selectedPost.content);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [blogTitle]);

  const handleUpdate = async () => {
    if (post) {
      try {
        const response = await fetch(`https://simple-personal-portfolio-backend.vercel.app/api/contents/${post._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...post, content: updatedContent }),
        });
        if (response.ok) {
          const updatedPost = await response.json();
          setPost(updatedPost);
          setIsEditing(false);
          alert('Post updated successfully!');
        } else {
          alert('Failed to update post.');
        }
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }
  };

  const handleDelete = async () => {
    if (post && window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`https://simple-personal-portfolio-backend.vercel.app/api/contents/${post._id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Post deleted successfully!');
          navigate('/blog');
        } else {
          alert('Failed to delete post.');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  return (
    <div className="container my-5">
      {post ? (
        <div className="card shadow-lg">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">{post.title}</h1>
            {isEditing ? (
              <>
                <textarea
                  value={updatedContent}
                  onChange={(e) => setUpdatedContent(e.target.value)}
                  rows="10"
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-center">
                  <button className="btn btn-success mx-2" onClick={handleUpdate}>Save</button>
                  <button className="btn btn-secondary mx-2" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p className="card-text">{post.content}</p>
                <div className="d-flex justify-content-center mt-4">
                  <button className="btn btn-primary mx-2" onClick={() => setIsEditing(true)}>Edit</button>
                  <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;

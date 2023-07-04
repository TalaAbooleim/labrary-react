// import React, { useState, useEffect } from 'react';
// import "./Postss.css"
// import axios from 'axios';

// function Postss() {
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(' http://localhost:3001/products');
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = { name, post };

//     try {
//       await axios.post('http://localhost:3001/products', newPost);
//       setPosts([...posts, newPost]);
//       setName('');
//       setPost('');
//       console.log('Post saved successfully');
//     } catch (error) {
//       console.error('Error saving post:', error);
//     }
//   };

//   return (
//     <div className="post-form" style={{ maxWidth: '500px', margin: 'auto' }}>
//       <h2>Create a Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="post">Post:</label>
//           <textarea
//             id="post"
//             value={post}
//             onChange={(e) => setPost(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Posts</h2>
//       {posts.map((post, index) => (
//         <div key={index}>
//           <h3>{post.name}</h3>
//           <p>{post.post}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Postss;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Postss = () => {
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [postId, setPostId] = useState(null);

//   useEffect(() => {
//     // You can fetch the post data to populate the form if in edit mode
//     if (editMode && postId) {
//       fetchPost();
//     }
//   }, [editMode, postId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = { name, post };

//     try {
//       if (editMode) {
//         // Edit mode - update the existing post
//         await axios.put(`http://localhost:3001/products${postId}`, newPost);
//         console.log('Post updated successfully');
//       } else {
//         // Create mode - create a new post
//         await axios.post('http://localhost:3001/products', newPost);
//         console.log('Post created successfully');
//       }

//       // Reset form values
//       setName('');
//       setPost('');
//       setEditMode(false);
//       setPostId(null);
//     } catch (error) {
//       console.error('Error saving post:', error);
//     }
//   };

//   const handleEdit = (postId) => {
//     setEditMode(true);
//     setPostId(postId);
//   };

//   const handleDelete = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:3001/products/${postId}`);
//       console.log('Post deleted successfully');
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   const fetchPost = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/products/${postId}`);
//       const { name, post } = response.data;
//       setName(name);
//       setPost(post);
//     } catch (error) {
//       console.error('Error fetching post:', error);
//     }
//   };

//   return (
//     <div className="post-form">
//       <h2>{editMode ? 'Edit Post' : 'Create a Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="post">Post:</label>
//           <textarea
//             id="post"
//             value={post}
//             onChange={(e) => setPost(e.target.value)}
//           />
//         </div>
//         <button type="submit">{editMode ? 'Update' : 'Submit'}</button>
//       </form>
//       {editMode && (
//         <button onClick={() => handleDelete(postId)}>Delete</button>
//       )}
//     </div>
//   );
// };

// export default Postss;



// import React, { useState, useEffect } from 'react';
// import './Postss.css';
// import axios from 'axios';

// function Postss() {
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/products');
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = { name, post };

//     try {
//       await axios.post('http://localhost:3001/products', newPost);
//       setPosts([...posts, newPost]);
//       setName('');
//       setPost('');
//       console.log('Post saved successfully');
//     } catch (error) {
//       console.error('Error saving post:', error);
//     }
//   };

//   return (
//     <div className="post-container">
      
//       <form onSubmit={handleSubmit}>
//         <div className='post'>
//         <h2>Create a comment</h2>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className='post'>
//           <label htmlFor="post">Post:</label>
//           <textarea
//             id="post"
//             value={post}
//             onChange={(e) => setPost(e.target.value)}
//           />
//         </div>
//         <div className='post'>
//         <button type="submit">Submit</button>
//         </div>
//       </form>

//       <h2>Posts</h2>
//       <div className="post-grid">
//         {posts.map((post, index) => (
//           <div key={index} className="post-card">
//             <h3>{post.name}</h3>
//             <p>{post.post}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Postss;




// import React, { useState, useEffect } from 'react';
// import './Postss.css';
// import axios from 'axios';

// function Postss() {
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [editIndex, setEditIndex] = useState(-1);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/products');
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editIndex >= 0) {
//       // Edit existing post
//       const editedPost = { ...posts[editIndex], name, post };

//       try {
//         await axios.put(
//           `http://localhost:3001/products/${posts[editIndex].id}`,
//           editedPost
//         );
//         const updatedPosts = [...posts];
//         updatedPosts[editIndex] = editedPost;
//         setPosts(updatedPosts);
//         setEditIndex(-1);
//         console.log('Post updated successfully');
//       } catch (error) {
//         console.error('Error updating post:', error);
//       }
//     } else {
//       // Create new post
//       const newPost = { name, post };

//       try {
//         await axios.post('http://localhost:3001/products', newPost);
//         setPosts([...posts, newPost]);
//         setName('');
//         setPost('');
//         console.log('Post saved successfully');
//       } catch (error) {
//         console.error('Error saving post:', error);
//       }
//     }
//   };

//   const handleEdit = (index) => {
//     setName(posts[index].name);
//     setPost(posts[index].post);
//     setEditIndex(index);
//   };

//   const handleDelete = async (index) => {
//     try {
//       await axios.delete(`http://localhost:3001/products/${posts[index].id}`);
//       const updatedPosts = [...posts];
//       updatedPosts.splice(index, 1);
//       setPosts(updatedPosts);
//       console.log('Post deleted successfully');
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <div className="post-container">
//       <form onSubmit={handleSubmit}>
//         <div className="post">
//           <h2>Create a comment</h2>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="post">
//           <label htmlFor="post">Post:</label>
//           <textarea
//             id="post"
//             value={post}
//             onChange={(e) => setPost(e.target.value)}
//           />
//         </div>
//         <div className="post">
//           <button type="submit">
//             {editIndex >= 0 ? 'Update' : 'Submit'}
//           </button>
//         </div>
//       </form>

//       <h2>Posts</h2>
//       <div className="post-grid">
//         {posts.map((post, index) => (
//           <div key={index} className="post-card">
//             <h3>{post.name}</h3>
//             <p>{post.post}</p>
//             <div>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Postss;


import React, { useState, useEffect } from 'react';
import './Postss.css';
import axios from 'axios';

function Postss() {
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [book, setbook] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editIndex >= 0) {
      // Edit existing post
      const editedPost = { ...posts[editIndex], name, post };

      try {
        await axios.put(
          `http://localhost:3001/products/${posts[editIndex].id}`,
          editedPost
        );
        const updatedPosts = [...posts];
        updatedPosts[editIndex] = editedPost;
        setPosts(updatedPosts);
        setEditIndex(-1);
        console.log('Post updated successfully');
      } catch (error) {
        console.error('Error updating post:', error);
      }
    } else {
      // Create new post
      const newPost = { name, post,book };

      try {
        await axios.post('http://localhost:3001/products', newPost);
        setPosts([...posts, newPost]);
        setName('');
        setPost('');
        setbook('');
        console.log('Post saved successfully');
      } catch (error) {
        console.error('Error saving post:', error);
      }
    }
  };

  // const handleEdit = (index) => {
  //   setName(posts[index].name);
  //   setPost(posts[index].post);
  //   setEditIndex(index);
  // };

  // const handleDelete = async (index) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/products/${posts[index].id}`);
  //     const updatedPosts = [...posts];
  //     updatedPosts.splice(index, 1);
  //     setPosts(updatedPosts);
  //     console.log('Post deleted successfully');
  //   } catch (error) {
  //     console.error('Error deleting post:', error);
  //   }
  // };

  return (
    <div className="post-container">
      <form onSubmit={handleSubmit}>
        <div className="post">
          <h2>Create a comment</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="post">
          <label htmlFor="post">Name the Book:</label>
          <textarea
            id="book"
            value={book}
            onChange={(e) => setbook(e.target.value)}
          />
        </div>
        <div className="post">
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div className="post">
          <button type="submit">
            {editIndex >= 0 ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>

      <h2>Posts</h2>
      <div className="post-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <div className="profile-info">
              <div className="avatar">
                <img src="https://th.bing.com/th?id=OIP.F_LCsTNzvUBI-kwIBEjtJQHaHa&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"className='imgg' alt="Avatar" />
              </div>
              <div className="name-time">
                <h3>{post.name}</h3>
                <p>{post.book}</p>
                <p>{post.time}</p>
              </div>
            </div>
            
            <p>{post.post}</p>
            
            <div>
              {/* <button onClick={() => handleEdit(index)}>Edit</button> */}
              {/* <button onClick={() => handleDelete(index)}>Delete</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Postss;


import React, { useEffect, useState } from 'react';
import"./Home.css";






const Home = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch(' http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setBookData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="book-grid">
      {bookData.map((book) => (
        <div key={book.id} className="book-card">
          
          < img src={book.image}  className='imgcur'alt={book.title} />
          

          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
      
    </div>
    



    
  );
};

export default Home;
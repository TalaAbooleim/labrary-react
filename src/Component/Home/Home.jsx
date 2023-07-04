

import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [bookData, setBookData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20);

  useEffect(() => {
    // Fetch the JSON data
    fetch('http://localhost:3001/Books')
      .then((response) => response.json())
      .then((data) => setBookData(data))
      .catch((error) => console.log(error));
  }, []);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookData.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="book-grid">
      {currentBooks.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} className="imgcur" alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
<br></br>
      <div className="pagination">
        {Array.from({ length: Math.ceil(bookData.length / booksPerPage) }).map(
          (item, index) => (
            <button
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { useState } from 'react';

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


 const handlePrevious = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    paginate(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, pageNumbers.length));
    paginate(currentPage + 1);
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button className="page-btn" onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => {
                setCurrentPage(number);
                paginate(number);
              }} href="#" className={`page-link ${number === currentPage ? 'active-page' : ' '}`}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button className="page-btn" onClick={handleNext} disabled={currentPage === pageNumbers.length}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};


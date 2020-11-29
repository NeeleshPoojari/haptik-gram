import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ friendPerPage, totalFriends, paginate, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalFriends / friendPerPage); i++) {
    pageNumbers.push(i);
  }

  if(pageNumbers.length && pageNumbers.length < currentPage ) {
    paginate(pageNumbers.length)
  }
  
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number == currentPage ? "active" : ""}`}
          >
            <span
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  friendPerPage: PropTypes.number.isRequired,
  totalFriends: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;

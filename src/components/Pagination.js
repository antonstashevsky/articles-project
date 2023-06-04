import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ newsPerPage, paginate }) => {
  const { totalNews } = useSelector((state) => state.articles);
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return (
    <nav className="mt-5 d-flex justify-content-center align-items-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";
import PropTypes from "prop-types";

const Sort = ({ toggleSort }) => (
  <div className="sort-container text-right mb-2">
  <h3 className="large text-center mb-3 mt-2">Friend List</h3>
    <span onClick={toggleSort} className="sort">
      <i class="fa fa-sort" aria-hidden="true"></i>
    </span>
  </div>
);

Sort.propTypes = {
  toggleSort: PropTypes.func.isRequired,
};

export default Sort;

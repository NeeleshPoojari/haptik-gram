import React from "react";
import PropTypes from "prop-types";

const Search = ({ onChangeField, searchVal }) => {
  return (
    <div className="search-friend">
      <h3 className="large text-center mb-3">Find Your Friend</h3>
      <div className="text-center col-12 mb-4">
        <input
          className="searchFriend col-12"
          type="text"
          value={searchVal}
          placeholder="Enter your friend's name"
          onChange={(e) => onChangeField(e, "find-friend")}
        ></input>
      </div>
    </div>
  );
};

Search.propTypes = {
  onChangeField: PropTypes.func.isRequired,
  searchVal: PropTypes.string.isRequired,
};

export default Search;

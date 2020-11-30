import React from "react";
import PropTypes from "prop-types";

const Friend = ({ friend, addFavourite, updateThrModal }) => {
  return (
    <li className={`list-group-item ${friend.isFavourite ? "favourite" : ""}`}>
      <div class="friend-container">
        <div className="friend-details">
          <p class="name">{friend.name}</p>
          <sub class="sub-heading">is your friend</sub>
        </div>
        <div className="action-icons">
          <span
            className="icon favourite-icon"
            onClick={() => addFavourite(friend.id)}
          >
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>
          <span
            className="icon delete-icon"
            onClick={() => updateThrModal(friend)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </li>
  );
};

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
  updateThrModal: PropTypes.func.isRequired,
  addFavourite: PropTypes.func.isRequired,
};

export default Friend;

import React from "react";
import PropTypes from "prop-types";

const AddFriend = ({ friend, onChangeField, addFriend }) => {
  return (
    <div className="add-friend-comp">
      <h3 className="large text-center mb-3 mt-2">Add New Friend</h3>
      <div className = "text-center col-12 mb-3">
        <input
          className="addfriend col-12"
          type="text"
          placeholder="Enter the Name"
          value={friend}
          onChange={(e) => onChangeField(e, "add-friend")}
          onKeyPress={(e) => addFriend(e)}
        ></input>
      </div>
    </div>
  );
};

AddFriend.propTypes = {
  friend: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  addFriend: PropTypes.func.isRequired,
};

export default AddFriend;

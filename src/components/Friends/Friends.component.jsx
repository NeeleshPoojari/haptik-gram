import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner/Spinner.component";
import Friend from "./Friend.component";
const Friends = ({ friendList, loading, deleteFriend, addFavourite, currentPage, friendPerPage }) => {

  const indexOfLastfriend = currentPage * friendPerPage;
  const indexOfFirstFriend = indexOfLastfriend - friendPerPage;
  const currentFriends = friendList.slice(indexOfFirstFriend, indexOfLastfriend);
  
  return (
    <Fragment>
      {!loading ? (
        <ul className="list-group mb-2">
          {currentFriends.length > 0 ? currentFriends.map((friend) => (
            <Friend
              key={friend.id}
              friend={friend}
              deleteFriend={deleteFriend}
              addFavourite={addFavourite}
            />
          )): <p className="text-center mb-3 mt-4">No Friends Available</p>}
        </ul>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Friends.propTypes = {
  friendList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteFriend: PropTypes.func.isRequired,
};

export default Friends;

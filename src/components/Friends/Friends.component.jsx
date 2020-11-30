import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import Spinner from "../Spinner/Spinner.component";
import Friend from "./Friend.component";
Modal.setAppElement("#root");

const Friends = ({
  friendList,
  loading,
  deleteFriend,
  addFavourite,
  currentPage,
  friendPerPage,
  setIsOpenModal,
  deleteFr,
  isOpenModal,
  updateThrModal,
}) => {
  const indexOfLastfriend = currentPage * friendPerPage;
  const indexOfFirstFriend = indexOfLastfriend - friendPerPage;
  const currentFriends = friendList.slice(
    indexOfFirstFriend,
    indexOfLastfriend
  );

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <Modal
            isOpen={isOpenModal}
            className="modal-container"
            overlayClassName="modal-overlay"
            contentLabel="Delete Modal"
          >
            <p>Really want to unfriend {deleteFr.name}</p>
            <div className="button-container">
              <button
                className="modal-button"
                onClick={() => setIsOpenModal(false)}
              >
                close
              </button>
              <button
                className="modal-button"
                onClick={() => deleteFriend(deleteFr.id)}
              >
                Unfriend
              </button>
            </div>
          </Modal>
          <ul className="list-group mb-2">
            {currentFriends.length > 0 ? (
              currentFriends.map((friend) => (
                <Friend
                  key={friend.id}
                  friend={friend}
                  addFavourite={addFavourite}
                  updateThrModal={updateThrModal}
                />
              ))
            ) : (
              <p className="text-center mb-3 mt-4">No Friends Available</p>
            )}
          </ul>
        </Fragment>
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
  addFavourite: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  friendPerPage: PropTypes.number.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
  deleteFr: PropTypes.object.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  updateThrModal: PropTypes.func.isRequired,
};

export default Friends;

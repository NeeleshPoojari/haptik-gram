import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";



//componts
import Friends from "./components/Friends/Friends.component";
import Pagination from "./components/Pagination/Pagination.component";
import AddFriend from "./components/AddFriend/AddFriend.component";
import Search from "./components/Search/Search.component";
import Sort from "./components/Sort/Sort.component";

import "./App.css";

const App = () => {
  //hooks

  const [friendList, setFriendList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [isSorted, setSorted] = useState(false);
  const [friend, setFriend] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendPerPage] = useState(4);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteFr, setDeleteFr] = useState({});

  //did mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://my-json-server.typicode.com/NeeleshPoojari/mockFriendJson/friendList"
      );
      setFriendList(res.data);
      setSearchedList(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const currentFriends = friendList.filter(
      (fr) => fr.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
    );

    if (isSorted) {
      currentFriends.sort((a, b) => {
        if (a.isFavourite && !b.isFavourite) {
          return -1;
        } else if (!a.isFavourite && b.isFavourite) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    setSearchedList(currentFriends);
  }, [searchVal, friendList, isSorted]);

  //Logic to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // on input field change
  const onChangeField = (e, type) => {
    if (type === "add-friend") {
      setFriend(e.target.value);
    } else {
      setSearchVal(e.target.value);
    }
  };

  //Add newly added friend to list
  const addFriend = (e) => {
    if (friend !== "" && e.key === "Enter") {
      const id = uuidv4();
      setFriendList([{ id, name: friend, isFavourite: false }, ...friendList]);
      setFriend("");
    }
  };

  // Delete friend
  const deleteFriend = (id) => {
    const filteredList = friendList.filter((fr) => fr.id !== id);
    setIsOpenModal(false);
    setFriendList(filteredList);
  };

  //Add favourite
  const addFavourite = (id) => {
    const updatedlist = friendList.map((fr) =>
      fr.id === id ? { ...fr, isFavourite: !fr.isFavourite } : fr
    );
    setFriendList(updatedlist);
  };

  //Sort by Favourite
  const toggleSort = () => setSorted(!isSorted);

  //open modal
  const updateThrModal = (fr) => {
    setIsOpenModal(true);
    setDeleteFr(fr);
  }

  return (
    <div className="container mt-3 col-5">
      <h1 className="text-center mb-3 app-header">hAPTIK-gRAM</h1>

      <div className="action-container">
        <AddFriend
          onChangeField={onChangeField}
          addFriend={addFriend}
          friend={friend}
        />
        <Search onChangeField={onChangeField} searchVal={searchVal} />
      </div>
      <Sort toggleSort={toggleSort} />
      <Friends
        friendList={searchedList}
        loading={loading}
        deleteFriend={deleteFriend}
        addFavourite={addFavourite}
        currentPage={currentPage}
        friendPerPage={friendPerPage}
        updateThrModal={updateThrModal}
        isOpenModal={isOpenModal}
        deleteFr={deleteFr}
        setIsOpenModal={setIsOpenModal}
      />
      <Pagination
        friendPerPage={friendPerPage}
        totalFriends={searchedList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;

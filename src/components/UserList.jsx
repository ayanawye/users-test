import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { createPages } from "../utils/pagination";
import UserModal from "./UserModal";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const [currantPage, setCurrantPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  const pageCount = Math.ceil(totalCount / 10);

  const pages = [];
  createPages(pages, pageCount, currantPage);

  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    const getUsers = async () => {
      const resp = await axios.get(
        `https://api.github.com/search/users?q=${debounceSearch}&per_page=10&page=${currantPage}&sort=repositories`
      );
      const data = await resp.data;
      setTotalCount(data.total_count);
      setUsers(data.items);
    };
    if (debounceSearch) getUsers();
  }, [debounceSearch, currantPage]);

  return (
    <div className="users_block">
      <input
        type="text"
        placeholder="Find users..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="users">
        {users.length !== 0 ? (
          users.map((user, index) => (
              <div
                key={user?.id}
                className="user"
                data-testid="user"
                onClick={() => setVisibleModal(true)}
              >
                <div className="number">
                  <p>{index + 1}</p>
                  <img className="avatar" src={user?.avatar_url} alt="avatar" />
                </div>
                <h4>{user?.login}</h4>
                <p>Type: {user?.type}</p>
              {visibleModal && (
                <UserModal user={user} key={user.id} close={() => setVisibleModal(false)} />
              )}
              </div>
          ))
        ) : (
          <h1>User not found</h1>
        )}
      </div>
      <div className="pages">
        {pages.map((page, index) => (
          <span
            onClick={() => setCurrantPage(page)}
            key={index}
            className={currantPage === page ? "currant_page" : "page"}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserList;

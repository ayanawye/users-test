import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { createPages } from "../utils/pagination";
import UserModal from "./UserModal";
import UserItem from "./UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
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
            <UserItem user={user} index={index} key={user.id} />
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

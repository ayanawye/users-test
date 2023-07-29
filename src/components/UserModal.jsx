import axios from "axios";
import React, { useEffect, useState } from "react";

const UserModal = ({ user, close }) => {
  const [repos, setRepos] = useState([]);
  const [currantPage, setCurrantPage] = useState(1);

  useEffect(() => {
    const getUserRepos = async () => {
      const resp = await axios.get(
        `https://api.github.com/users/${user?.login}/repos?per_page=10&page=${currantPage}&sort=repositories`
      );
      const data = await resp.data;
      setRepos(data);
    };
    getUserRepos();
  }, [user?.id, currantPage]);

  return (
    <div className="modal_box" onClick={() => close()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="user_info">
          <img src={user?.avatar_url} alt="avatar" />
          <div>
          <h3>{user?.login}</h3>
          <p>
            GitHub: <a href={user?.html_url}>{user?.html_url}</a>
          </p>
          </div>
        </div>
        <div className="reposs">
          {repos.length !== 0 ? (
            repos.map((rep, index) => (
              <div key={rep.id} className="repo" data-testid="repo">
                <div className="repos_number">
                  <p>{index + 1}</p>
                  <h4>{rep?.name}</h4>
                </div>
                <p>{rep?.description?.slice(0, 20)}</p>
                <p><span>Updated:</span> {rep?.updated_at?.slice(0, 10)}</p>
              </div>
            ))
          ) : (
            <h1>Dont have repositories</h1>
          )}
          <div>
          <button
            onClick={() => setCurrantPage(currantPage - 1)}
            disabled={currantPage === 1 || repos.length === 0}
          >
            prev
          </button>
          <button
            onClick={() => setCurrantPage(currantPage + 1)}
            disabled={repos.length === 0 || repos.length !== 10}
          >
            next
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

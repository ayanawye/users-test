import React, { useState } from "react";
import UserModal from "./UserModal";

const UserItem = ({ user, index }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  console.log(visibleModal);

  return (
    <>
      <div
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
      </div>
        {visibleModal && (
          <UserModal user={user} close={() => setVisibleModal(false)} />
        )}
    </>
  );
};

export default UserItem;

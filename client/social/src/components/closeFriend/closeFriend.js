import React from "react";
import "./closeFriend.css";
const closeFriend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img
        src={`http://localhost:3000/assets/${user.profilePicture}`}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarfriendName">{user.username}</span>
    </li>
  );
};

export default closeFriend;

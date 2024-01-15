import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/UI/userDmThumbnailTemplate.scss"

type UserDmProps = {
  id: number;
  username: string;
  displayName: string;
  avatar: string;
  status?: string;
};

const UserDm = ({ id, username, displayName, avatar, status }: UserDmProps) => {
  const navigate = useNavigate();

  const redirectToDm = () => {
    navigate(`/dm/${id}`);
  };

  return (
    <div onClick={redirectToDm} className="user-dm" >
      <div className="user-dm-status">
        <img className="user-dm-avatar" alt={username} src={avatar} />
        <div className={`status ${status}`}>

        </div>
      </div>

      <div className="user-dm-info">
        <p className="user-dm-display-name">{displayName}</p>
        <p className="user-dm-username">{username}</p>
      </div>
    </div>
  );
};

export default UserDm;
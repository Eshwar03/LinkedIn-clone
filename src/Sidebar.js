import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiE5iIug6H43wtwhHCEzE4XLfAHcHt3M4euFKwoQ27k8Rymnd5GGnnT03s1hc19R44LUo&usqp=CAU"
          alt="backgroungImage"
        />

        <Avatar
          className="sidebar_avatar"
          src={user.photoURL}
          sx={{ width: 70, height: 70 }}
          style={{ border: "1.7px solid white" }}
        />

        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Connections</p>
          <p className="sidebar_stat_value">554</p>
        </div>
        <div className="sidebar_stat">
          <p>Who viewed you </p>
          <p className="sidebar_stat_value">1007</p>
        </div>
      </div>
      <div className="my_items">
        <BookmarkIcon fontSize="small" style={{ color: "gray" }} />
        <p>My items</p>
      </div>
    </div>
  );
}

export default Sidebar;

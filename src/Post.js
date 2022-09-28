import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";

function Post({ name, description, photoUrl, message }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={photoUrl} />

        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption
          Icon={ThumbUpOffAltOutlinedIcon}
          title="Like"
          color="gray"
        />
        <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShortcutOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={TelegramIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;

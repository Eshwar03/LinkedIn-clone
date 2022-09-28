import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle, list) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon fontSize="small" />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
        <div>{list}</div>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon fontSize="small" />
      </div>
      {newsArticle("Hello everyone! Welcome to my LinkedIn Clone")}
      {newsArticle(
        "Feel free to post",
        "Type in something and press Enter. Please keep the feed clean."
      )}
      {newsArticle(
        "Working functions in this build",
        "",

        <ul style={{ fontSize: "14px" }}>
          <li>Register</li>
          <li>Login</li>
          <li>Post</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default Widgets;

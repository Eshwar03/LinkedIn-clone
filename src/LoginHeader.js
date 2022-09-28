import React from "react";
import "./Header.css";
import "./LoginHeader.css";
import HeaderOption from "./HeaderOption";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function LoginHeader() {
  return (
    <div className="header login-header">
      <div className="login-header-left">
        <img
          src="https://logolook.net/wp-content/uploads/2021/06/Linkedin-Logo-768x432.png"
          alt="linkedinIcon"
        />
      </div>
      <div className="header-right">
        <HeaderOption size="large" title="Discover" Icon={ExploreIcon} />

        <HeaderOption size="large" title="People" Icon={PeopleIcon} />
        <HeaderOption size="large" title="Learning" Icon={YouTubeIcon} />
        <HeaderOption size="large" title="Jobs" Icon={BusinessCenterIcon} />
      </div>
    </div>
  );
}

export default LoginHeader;

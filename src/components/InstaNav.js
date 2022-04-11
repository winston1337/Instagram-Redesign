import React from "react";
import "./NavFoot.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";


function InstaNav() {
  return (
    <div className="navbar">
      <div className="navbar_brand">
        <img
          src="./instaLogo_lightMode.png"
          className="navbar_logo"
          alt="logo"
        />
      </div>

      <div className="navbar_search">
        <div className="search">
          <SearchIcon className="search_icon" />
          <input type="text" placeholder="Search" className="search_input" />
        </div>
      </div>

      <div>
      <ul className="navbar_icons">
            <li><link to="/home">{<HomeIcon className="nav_icon" />}</link></li>
            <li><link to="/chat">{<SendIcon className="nav_icon" />}</link></li>
              <li><a href="/">{<AddIcon className="nav_icon" />}</a></li>
              <li><link to="/explore">{<ExploreIcon className="nav_icon" />}</link></li>
              <li><link to="/profile">{<Avatar alt="Instagram" src="./profile_pic_insta.webp" className="avatar"/>}</link></li>
            </ul>
      </div>
    </div>
  );
}

export default InstaNav;
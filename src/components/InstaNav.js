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

      <div className="navbar_icons">
        <button onClick={<HomeIcon className="nav_icon" />}></button>

        <button onClick={<SendIcon className="nav_icon" />}></button>

        <button onClick={<AddIcon className="nav_icon" />}></button>

        <button onClick={<ExploreIcon className="nav_icon" />}></button>

        <button
          onClick={<FavoriteBorderOutlinedIcon className="nav_icon" />}
        ></button>

        <button
          onClick={
            <Avatar
              alt="Instagram"
              src="./profile_pic_insta.webp"
              className="avatar"
            />
          }
        ></button>
      </div>
      </div>
      </div>
    );
    
  
}


export default InstaNav;



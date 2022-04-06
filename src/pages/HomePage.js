import React from "react";
import "../App.css";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import FunctionLineIcon from "remixicon-react/FunctionLineIcon";
import Notification4FillIcon from "remixicon-react/Notification4FillIcon";

function HomePage() {
  return (
    <body>
      {/* sidebar */}
      <div className="sidebar">
        <a href="#" className="logo">
          <img src="logo512.png" alt="" />
        </a>

        {/* profile image */}
        <div className="profile">
          <div className="profile-img">
            <img src="./img/profile.jpg" alt="" />
          </div>
          <div className="name">
            <h1>Rashaad</h1>
            <img src="./img/verify.png" alt="" />
          </div>
          <span>@lipa</span>
        </div>

        {/* about */}
        <div className="about">
          {/* box 1 */}
          <div className="box">
            <h3>54</h3>
            <span>Posts</span>
          </div>
          {/* box 2 */}
          <div className="box">
            <h3>2.1k</h3>
            <span>Followers</span>
          </div>
          {/* box 3 */}
          <div className="box">
            <h3>14.4k</h3>
            <span>Followers</span>
          </div>
        </div>
        {/* Menu */}
        <div className="menu">
          <a href="#" className="active">
            <span className="icon">
              <FunctionLineIcon />
            </span>
            Feed
          </a>
          <a href="#">
            <span className="icon">
              <SearchLineIcon />
            </span>
            Explore
          </a>

          <a href="#">
            <span className="icon">
              <Notification4FillIcon />
            </span>
            Notification
          </a>

          <a href="#">
            <span className="icon">
              <i class="ri-mail-unread-fill"></i>
            </span>
            Messages
          </a>
          <a href="#">
            <span className="icon">
              <i class="ri-send-plane-fill"></i>
            </span>
            Direct
          </a>
          <a href="#">
            <span className="icon">
              <i class="ri-bar-chart-2-fill"></i>
            </span>
            Stats
          </a>
          <a href="#">
            <span className="icon">
              <i class="ri-settings-5-line"></i>
            </span>
            Settings
          </a>
          <a href="#">
            <span className="icon">
              <i class="ri-logout-box-r-line"></i>
            </span>
            Logout
          </a>
        </div>
      </div>

      {/* main home */}
      <div className="main-home">
        {/* Header */}
        <div className="header">
          {/* Search */}
          <div className="search">
            <i class="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>

          {/* content */}
          <div className="header-content">
            <i class="ri-notification-4-fill"></i>
            <i class="ri-mail-unread-fill"></i>
            {/* Button */}
            <a href="#" className="btn">
              <i class="ri-add-circle-fill"></i>
              <div className="btn-text">Add Photo</div>
            </a>
          </div>
        </div>

        {/* ig stories */}
        <div className="stories-title">
          <h1>Stories</h1>
          <a href="" className="btn">
            {/* icon */}
            <div className="text">Watch All</div>
          </a>
        </div>
        {/* stories content */}
        <div className="stories">
          {/* story 1*/}
          <div className="stories-img color">
            <img src="###" alt="" />
            <div className="add">+</div>
          </div>
          {/* story 2*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 3*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 4*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 5*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 6*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 7*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 8*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 9*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
          {/* story 10*/}
          <div className="stories-img">
            <img src="###" alt="" />
          </div>
        </div>

        {/* main post */}
        <div className="feed">
          <h1>Feed</h1>
          <div className="feed-text">
            <h2>Latest</h2>
            <span>Popular</span>
          </div>
        </div>
        {/* Posts */}
        <div className="main-posts">
          {/* box 1 */}
          <div className="post-box">
            <img src="###" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                {/* icon heart */}
                <span>84.5k</span>
                {/*  comment icon */}
                <span>88</span>
              </div>
            </div>
          </div>
          <div className="post-box">
            <img src="###" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                {/* icon heart */}
                <span>84.5k</span>
                {/*  comment icon */}
                <span>88</span>
              </div>
            </div>
          </div>

          <div className="post-box">
            <img src="###" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                {/* icon heart */}
                <span>84.5k</span>
                {/*  comment icon */}
                <span>88</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default HomePage;

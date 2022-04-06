import React from "react";
import "../App.css";

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
              <i class="ri-function-line"></i>
            </span>
            Feed
          </a>
          <a href="#">
            <span className="icon">
              <i class="ri-search-line"></i>
            </span>
            Explore
          </a>

          <a href="#">
            <span className="icon">
              <i class="ri-notification-4-line"></i>
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
      </div>
    </body>
  );
}

export default HomePage;

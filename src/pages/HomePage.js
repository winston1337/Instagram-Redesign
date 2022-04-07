import React from "react";
import "../App.css";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import FunctionLineIcon from "remixicon-react/FunctionLineIcon";
import Notification4FillIcon from "remixicon-react/Notification4FillIcon";
import MailUnreadFillIcon from "remixicon-react/MailUnreadFillIcon";
import SendPlaneFillIcon from "remixicon-react/SendPlaneFillIcon";
import BarChart2FillIcon from "remixicon-react/BarChart2FillIcon";
import Settings5FillIcon from "remixicon-react/Settings5FillIcon";
import LogoutBoxRFillIcon from "remixicon-react/LogoutBoxRFillIcon";
import AddCircleFillIcon from "remixicon-react/AddCircleFillIcon";
import PlayCircleFillIcon from "remixicon-react/PlayCircleFillIcon";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import Chat1FillIcon from "remixicon-react/Chat1LineIcon";

function HomePage() {
  return (
    <body>
      {/* sidebar */}
      <div className="sidebar">
        <a href="#" className="logo">
          <img src="./imgs/ig_logo.png" alt="" />
        </a>

        {/* profile image */}
        <div className="profile">
          <div className="profile-img">
            <img src="./imgs/profile_pic.jpeg" alt="" />
          </div>
          <div className="name">
            <h1>Rashaad</h1>
            <img src="./imgs/ig_verify.jpeg" alt="" />
          </div>
          <span>@Birdshavebeaks</span>
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
              <MailUnreadFillIcon />
            </span>
            Messages
          </a>
          <a href="#">
            <span className="icon">
              <SendPlaneFillIcon />
            </span>
            Direct
          </a>
          <a href="#">
            <span className="icon">
              <BarChart2FillIcon />
            </span>
            Stats
          </a>
          <a href="#">
            <span className="icon">
              <Settings5FillIcon />
            </span>
            Settings
          </a>
          <a href="#">
            <span className="icon">
              <LogoutBoxRFillIcon />
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
            <SearchLineIcon />
            <input type="text" placeholder="Search" />
          </div>

          {/* content */}
          <div className="header-content">
            <Notification4FillIcon />
            <MailUnreadFillIcon />
            {/* Button */}
            <a href="#" className="btn">
              <AddCircleFillIcon />
              <div className="btn-text">Add Photo</div>
            </a>
          </div>
        </div>

        {/* ig stories */}
        <div className="stories-title">
          <h1>Stories</h1>
          <a href="" className="btn">
            <PlayCircleFillIcon />
            <div className="text">Watch All</div>
          </a>
        </div>
        {/* stories content */}
        <div className="stories">
          {/* story 1*/}
          <div className="stories-img color">
            <img src="./imgs/ig_photo4.jpeg" alt="" />
            <div className="add">+</div>
          </div>
          {/* story 2*/}
          <div className="stories-img">
            <img src="./imgs/story_photo1.jpeg" alt="" />
          </div>
          {/* story 3*/}
          <div className="stories-img">
            <img src="./imgs/story_photo2.jpeg" alt="" />
          </div>
          {/* story 4*/}
          <div className="stories-img">
            <img src="./imgs/story_photo3.jpeg" alt="" />
          </div>
          {/* story 5*/}
          <div className="stories-img">
            <img src="./imgs/story_photo6.jpeg" alt="" />
          </div>
          {/* story 6*/}
          <div className="stories-img">
            <img src="./imgs/story_photo5.jpeg" alt="" />
          </div>
          {/* story 7*/}
          <div className="stories-img">
            <img src="./imgs/story_photo8.jpeg" alt="" />
          </div>
          {/* story 8*/}
          <div className="stories-img">
            <img src="./imgs/story_photo7.jpeg" alt="" />
          </div>
          {/* story 9*/}
          <div className="stories-img">
            <img src="./imgs/story_photo9.jpeg" alt="" />
          </div>
          {/* story 10*/}
          <div className="stories-img">
            <img src="./imgs/story_photo10.jpeg" alt="" />
          </div>
        </div>

        {/* main post */}
        <div className="feed">
          <h1>Feed</h1>
          <div className="feed-text">
            <h2>Latest</h2>
            <h2>Popular</h2>
          </div>
        </div>
        {/* Posts */}
        <div className="main-posts">
          {/* box 1 */}
          <div className="post-box">
            <img src="./imgs/ig_photo2.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo2.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>
          <div className="post-box">
            <img src="./imgs/ig_photo4.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo3.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>

          <div className="post-box">
            <img src="./imgs/ig_photo3.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo4.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>
        </div>
        {/* Posts */}
        <div className="main-posts">
          {/* box 1 */}
          <div className="post-box">
            <img src="./imgs/ig_photo2.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo2.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>
          <div className="post-box">
            <img src="./imgs/ig_photo4.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo3.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>

          <div className="post-box">
            <img src="./imgs/ig_photo3.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo4.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>
        </div>
        {/* Posts */}
        <div className="main-posts">
          {/* box 1 */}
          <div className="post-box">
            <img src="./imgs/ig_photo2.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo2.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>
          <div className="post-box">
            <img src="./imgs/ig_photo4.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo3.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
                <span>88</span>
              </div>
            </div>
          </div>

          <div className="post-box">
            <img src="./imgs/ig_photo3.jpeg" alt="" />

            <div className="post-info">
              <div className="post-profile">
                <div className="post-img">
                  <img src="./imgs/profile_photo4.jpeg" alt="" />
                </div>
                <h3>Rashaad</h3>
              </div>
              <div className="likes">
                <HeartLineIcon />
                <span>84.5k</span>
                <Chat1FillIcon />
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

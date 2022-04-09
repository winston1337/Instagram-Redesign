import React, { useState } from "react";
import "./activity.css";

const Activity = () => {
  const [followingBeeg, setFollowingBeeg] = useState(false);
  const toggleFollowingBeeg = () => {
    setFollowingBeeg(!followingBeeg);
  };
  const [followingKim, setFollowingKim] = useState(false);
  const toggleFollowingKim = () => {
    setFollowingKim(!followingKim);
  };
  const [followingYe, setFollowingYe] = useState(false);
  const toggleFollowingYe = () => {
    setFollowingYe(!followingYe);
  };
  const [followingNba, setFollowingNba] = useState(false);
  const toggleFollowingNba = () => {
    setFollowingNba(!followingNba);
  };
  const [followingUfc, setFollowingUfc] = useState(false);
  const toggleFollowingUfc = () => {
    setFollowingUfc(!followingUfc);
  };
  const [followingConor, setFollowingConor] = useState(false);
  const toggleFollowingConor = () => {
    setFollowingConor(!followingConor);
  };
  return (
    <>
      <div class="notifications">
        <h1> Activity </h1>
        <div class="activity-log">
          <h2> Today </h2>
          <div class="activity-card">
            <img src="/actimg/drake.jpeg" class="user-img" alt="drake" />
            <p class="activity">
              <b>@champagnepapi</b> liked your post.
            </p>
            <img
              src="./imgs/profile_photo4.jpeg"
              class="activity-post"
              alt="post"
            />
          </div>

          <div class="activity-card">
            <img src="/actimg/drake.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@champagnepapi</b> commented: This is nice Yo!
            </p>
            <img
              src="./imgs/profile_photo4.jpeg"
              class="activity-post"
              alt="post"
            />
          </div>
          <h2> This Week </h2>
          <div class="activity-card">
            <img
              src="/actimg/blank.webp"
              class="user-img"
              alt="playboi carti"
            />
            <p class="activity">
              <b>@playboicarti</b> liked your post.
            </p>
            <img src="./imgs/ig_photo2.jpeg" class="activity-post" alt="post" />
          </div>

          <div class="activity-card">
            <img src="/actimg/druski.jpeg" class="user-img" alt="druski" />
            <p class="activity">
              <b>@druski2funny</b> commented: This place is amazing!
            </p>
            <img src="./imgs/ig_photo2.jpeg" class="activity-post" alt="post" />
          </div>

          <div class="activity-card">
            <img src="/actimg/druski.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@druski2funny</b> followed you back.
            </p>
          </div>

          <div class="activity-card">
            <img src="/actimg/rock.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@therock</b> mentioned you in a comment: @Rashaad Thanks Man!
            </p>
            <img src="./actimg/rocky.webp" class="activity-post" alt="post" />
          </div>

          <div class="activity-card">
            <img src="/actimg/rock.jpeg" class="user-img" alt="the rock" />
            <p class="activity">
              <b>@therock</b> liked your comment: You swole Boy!
            </p>
            <img src="./actimg/rocky.webp" class="activity-post" alt="post" />
          </div>
          <h2> Last Month </h2>
          <div class="activity-card">
            <img src="/actimg/yoshi.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@beegbren</b> liked your post
            </p>
            <img src="./imgs/ig_photo3.jpeg" class="activity-post" alt="" />
          </div>
          <div class="activity-card">
            <img src="/actimg/yoshi.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@beegbren</b> started following you.
            </p>
            {followingBeeg ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingBeeg}
              >
                Following
              </button>
            ) : (
              <button
                className="suggestionFollow"
                onClick={toggleFollowingBeeg}
              >
                Follow
              </button>
            )}
          </div>
          <div class="activity-card">
            <img src="/actimg/yoshi.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@beegbren</b> liked your post
            </p>
            <img src="./imgs/ig_photo3.jpeg" class="activity-post" alt="" />
          </div>
          <h2> Suggested</h2>
          <div class="activity-card">
            <img src="/actimg/kim k.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@kimkardashian</b> suggested for you.
            </p>
            {followingKim ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingKim}
              >
                Following
              </button>
            ) : (
              <button className="suggestionFollow" onClick={toggleFollowingKim}>
                Follow
              </button>
            )}
          </div>
          <div class="activity-card">
            <img src="/actimg/black.webp" class="user-img" alt="" />
            <p class="activity">
              <b>@kanyewest</b> suggested for you.
            </p>
            {followingYe ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingYe}
              >
                Following
              </button>
            ) : (
              <button className="suggestionFollow" onClick={toggleFollowingYe}>
                Follow
              </button>
            )}
          </div>
          <div class="activity-card">
            <img src="/actimg/nba.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@nba</b> suggested for you.
            </p>
            {followingNba ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingNba}
              >
                Following
              </button>
            ) : (
              <button className="suggestionFollow" onClick={toggleFollowingNba}>
                Follow
              </button>
            )}
          </div>
          <div class="activity-card">
            <img src="/actimg/ufc.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@Ufc</b> suggested for you.
            </p>
            {followingUfc ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingUfc}
              >
                Following
              </button>
            ) : (
              <button className="suggestionFollow" onClick={toggleFollowingUfc}>
                Follow
              </button>
            )}
          </div>
          <div class="activity-card">
            <img src="/actimg/mma.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@thenotoriousmma</b> suggested for you.
            </p>
            {followingConor ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingConor}
              >
                Following
              </button>
            ) : (
              <button
                className="suggestionFollow"
                onClick={toggleFollowingConor}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;

import React from "react";
import "./activity.css";

const Activity = () => {
  return (
    <>
      <div class="notifications">
        <h3> Notifications </h3>
        <div class="activity-log">
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

          <div class="activity-card">
            <img src="/actimg/yoshi.jpeg" class="user-img" alt="" />
            <p class="activity">
              <b>@beegbren</b> liked your post
            </p>
            <img src="./imgs/ig_photo3.jpeg" class="activity-post" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;

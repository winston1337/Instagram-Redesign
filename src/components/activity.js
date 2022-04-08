import React from "react";
import data from "../activity.json";

const activity = () => {
  return (
    <>
      <h3> Activity </h3>
      <div class="activity-log">
        <div class="activity-card">
          <img src="/actimg/drake.webp" class="user-img" alt="drake" />
          <p class="activity">
            <b>@champagnepapi</b> liked your post.
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img src="img/user2.png" class="user-img" alt="" />
          <p class="activity">
            <b>@pchampagnepapi</b>commented: This is Nice Yo!
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img
            src="public/actimg/blank.webp"
            class="user-img"
            alt="playboi carti"
          />
          <p class="activity">
            <b>@playboicarti</b> liked your post.
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img src="public/actimg/druski.jpeg" class="user-img" alt="druski" />
          <p class="activity">
            <b>@druski2funny</b> commented: This place is amazing!
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img src="img/user3.png" class="user-img" alt="" />
          <p class="activity">
            <b>@druski2funny</b> followed you back.
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img src="public/actimg/rock.jpeg" class="user-img" alt="" />
          <p class="activity">
            <b>@therock</b> mentioned you in a comment: @placeholder thanks my
            guy!
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img src="public/actimg/rock.jpeg" class="user-img" alt="the rock" />
          <p class="activity">
            <b>@therock</b> liked your comment: This tequila is the best thing
            i've ever had!
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="post" />
        </div>

        <div class="activity-card">
          <img src="public/actimg/yoshi.jpeg" class="user-img" alt="" />
          <p class="activity">
            <b>@beegbren</b> liked your post
          </p>
          <img src="img/posts/post1.png" class="activity-post" alt="" />
        </div>
      </div>
    </>
  );
};

export default activity;

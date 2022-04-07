import React, { useState } from "react";
import './profile.css';

const Profile = () => {
  const [suggestionMenu, setSuggestionMenu] = useState(false);
  const handleToggle = () => {
    setSuggestionMenu(!suggestionMenu);
  };

  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          paddingBottom: "1rem",
        }}
      >
        <div>
          <img
            style={{ width: "80px", height: "80px", borderRadius: "80px" }} alt="img"
            src="https://images.unsplash.com/photo-1633113247735-45a969eb9266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <div class="buttonContainer">
            <h4>instagramredesign</h4>
            <img
              className="check"
              src="https://thumbs.dreamstime.com/b/approved-icon-profile-verification-accept-badge-quality-check-mark-sticker-tick-vector-illustration-128840911.jpg" alt="img"
            />
            <button className="messageButton">Message</button>
            <button className="followButton">Follow</button>
            <button className="suggestion" onClick={handleToggle}>
              {suggestionMenu ? (
                <i class="fa fa-angle-up" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              )}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
              padding: "1rem",
            }}
          >
            <h6 className="numPosts">12 posts</h6>
            <h6 className="numFollowers">1.5k followers</h6>
            <h6 className="numFollowing">900 following</h6>
          </div>
          <div className="bio">
            <p className="bioIr">Instagram Redesign</p>
            <p className="bioHashtag">#WhereThingsComeToLife</p>
            <div className="bioFollowed"><span className="bioFollowedBy">Followed by </span>remmysip</div>
          </div>
        </div>
      </div>
      {suggestionMenu ? (
        <div className="dropDown">
          <div className="suggestionBorder">
            <p className="suggestedText">Suggested</p>
            <div className="row">
              <div class="card">
                <div className="card-image">
                  <img
                    className="suggestionImage"
                    src="https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"
                  />
                </div>
                <div class="card-detail">
                  <div className="suggestionName">
                    <p>
                      <b>Al</b>
                    </p>
                  </div>
                  <div className="suggestionRealName">
                    <p>Al Smith</p>
                  </div>
                  <button className="suggestionFollow">Follow</button>
                </div>
              </div>

              <div class="card">
                <div class="card-image">
                  <img
                    className="suggestionImage"
                    src="https://images.unsplash.com/photo-1568429838920-de3a3aa8cf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"
                  />
                </div>
                <div class="card-detail">
                  <div className="suggestionName">
                    <p>
                      <b>Rick</b>
                    </p>
                  </div>
                  <div className="suggestionRealName">
                    <p>Rick Name</p>
                  </div>
                  <button className="suggestionFollow">Follow</button>
                </div>
              </div>

              <div class="card">
                <div class="card-image">
                  <img
                    className="suggestionImage"
                    src="https://images.unsplash.com/photo-1485541653056-e688bdf8319e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"
                  />
                </div>
                <div class="card-detail">
                  <div className="suggestionName">
                    <p>
                      <b>Shine</b>
                    </p>
                  </div>
                  <div className="suggestionRealName">
                    <p>Shine Range</p>
                  </div>
                  <button className="suggestionFollow">Follow</button>
                </div>
              </div>

              <div class="card">
                <div class="card-image">
                  <img
                    className="suggestionImage"
                    src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"
                  />
                </div>
                <div class="card-detail">
                  <div className="suggestionName">
                    <p>
                      <b>Jared</b>
                    </p>
                  </div>
                  <div className="suggestionRealName">
                    <p>Jared Real</p>
                  </div>
                  <button className="suggestionFollow">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <hr style={{ marginTop: "1rem" }}></hr>

      <div className="gridPosts">
        <img
          className="grid"
          src="https://w7.pngwing.com/pngs/877/110/png-transparent-magic-square-safety-net-rectangle-mathematics-black-and-white-grid-miscellaneous-angle-furniture-thumbnail.png" alt="img"
        />
        <span class="posts">POSTS</span>
      </div>

      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYXV0aWZ1bCUyMGltYWdlcyUyMG9mJTIwcGxhY2VzJTIwdG8lMjBuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1531162328795-808523268d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGltYWdlcyUyMG9mJTIwcGxhY2VzJTIwdG8lMjBuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1570030990547-f6b13f3062ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1611420182989-3020dec418be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1583125311319-300af4db4abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" alt="img"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1566704351700-da9069468d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"
        />
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [suggestionMenu, setSuggestionMenu] = useState(false);
  const handleToggle = () => {
    setSuggestionMenu(!suggestionMenu);
  };

  // const [suggestionMenu2, setSuggestionMenu2] = useState(false);
  // const handleToggle = () => {
  // setSuggestionMenu2(!suggestionMenu2);
  // };

  const [followingIr, setFollowingIr] = useState(false);
  const toggleFollowingIr = () => {
    setFollowingIr(!followingIr);
    setSuggestionMenu(true);
  };

  const [followingAl, setFollowingAl] = useState(false);
  const toggleFollowingAl = () => {
    setFollowingAl(!followingAl);
  };

  const [followingRick, setFollowingRick] = useState(false);
  const toggleFollowingRick = () => {
    setFollowingRick(!followingRick);
  };

  const [followingShine, setFollowingShine] = useState(false);
  const toggleFollowingShine = () => {
    setFollowingShine(!followingShine);
  };

  const [followingJared, setFollowingJared] = useState(false);
  const toggleFollowingJared = () => {
    setFollowingJared(!followingJared);
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
            style={{ width: "168px", height: "168px", borderRadius: "80px" }} alt="img"
            src="https://images.unsplash.com/photo-1633113247735-45a969eb9266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="infoContainer">
          <div class="buttonContainer">
            <h2>instagramredesign</h2>
            <img
              className="check" alt="img"
              src="https://thumbs.dreamstime.com/b/approved-icon-profile-verification-accept-badge-quality-check-mark-sticker-tick-vector-illustration-128840911.jpg"
            />
            <button className="messageButton">Message</button>
            {followingIr ? (
              <button
                className="suggestionFollowing"
                onClick={toggleFollowingIr}
              >
                Following
              </button>
            ) : (
              <button className="suggestionFollow" onClick={toggleFollowingIr}>
                Follow
              </button>
            )}
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
              fontSize: "25px",
            }}
          >
            <h6 className="numPosts">12 posts</h6>
            <h6 className="numFollowers">1.5k followers</h6>
            <h6 className="numFollowing">900 following</h6>
          </div>
          <div className="bio">
            <p className="bioIr">Instagram Redesign</p>
            <p className="bioHashtag">#WhereThingsComeToLife</p>
            <div className="bioFollowed">
              <span className="bioFollowedBy">Followed by </span>remmysip
            </div>
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
                    className="suggestionImage" alt="img"
                    src="https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
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
                  {followingAl ? (
                    <button
                      className="suggestionFollowing"
                      onClick={toggleFollowingAl}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      className="suggestionFollow"
                      onClick={toggleFollowingAl}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>

              <div class="card">
                <div class="card-image">
                  <img
                    className="suggestionImage" alt="img"
                    src="https://images.unsplash.com/photo-1568429838920-de3a3aa8cf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
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
                  {followingRick ? (
                    <button
                      className="suggestionFollowing"
                      onClick={toggleFollowingRick}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      className="suggestionFollow"
                      onClick={toggleFollowingRick}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>

              <div class="card">
                <div class="card-image">
                  <img
                    className="suggestionImage" alt="img"
                    src="https://images.unsplash.com/photo-1485541653056-e688bdf8319e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
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
                  {followingShine ? (
                    <button
                      className="suggestionFollowing"
                      onClick={toggleFollowingShine}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      className="suggestionFollow"
                      onClick={toggleFollowingShine}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>

              <div class="card">
                <div class="card-image">
                  <img
                    className="suggestionImage" alt="img"
                    src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
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
                  {followingJared ? (
                    <button
                      className="suggestionFollowing"
                      onClick={toggleFollowingJared}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      className="suggestionFollow"
                      onClick={toggleFollowingJared}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <hr
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          width: "160%",
          marginLeft: "-100px",
        }}
      ></hr>

      <div className="gridPosts">
        <img
          className="grid" alt="img"
          src="https://w7.pngwing.com/pngs/877/110/png-transparent-magic-square-safety-net-rectangle-mathematics-black-and-white-grid-miscellaneous-angle-furniture-thumbnail.png"
        />
        <span class="posts">POSTS</span>
      </div>

      <div className="gallery">
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYXV0aWZ1bCUyMGltYWdlcyUyMG9mJTIwcGxhY2VzJTIwdG8lMjBuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1531162328795-808523268d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGltYWdlcyUyMG9mJTIwcGxhY2VzJTIwdG8lMjBuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwaW1hZ2VzJTIwb2YlMjBwbGFjZXMlMjB0byUyMG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1570030990547-f6b13f3062ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1611420182989-3020dec418be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1583125311319-300af4db4abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="profileImage" alt="img"
          src="https://images.unsplash.com/photo-1566704351700-da9069468d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
};

export default Profile;
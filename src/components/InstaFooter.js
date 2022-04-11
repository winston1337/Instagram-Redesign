import React from "react";
import "./NavFoot.css";

function InstaFooter() {
    return <div className="site-footer">
        <div className="container">
        <div className="row">
          <div className="col-1">
            <h6>About</h6>
            <p className="text-justify">Give people the power to build community and bring the world closer together. Connect with more people, build influence, and create compelling content that's distinctly yours. Share and grow your brand with our diverse, global community. Express yourself in new ways with the latest Instagram features. We're committed to fostering a safe and supportive community for everyone. </p>
          </div>

          <div className="col-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
            <li><a href="https://about.instagram.com/">ABOUT</a>{'\u25CF'}</li>
              <li><a href="https://help.instagram.com/">HELP</a>{'\u25CF'}</li>
              <li><a href="https://about.instagram.com/blog">PRESS</a>{'\u25CF'}</li>
              <li><a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">PRIVACY</a>{'\u25CF'}</li>
              <li><a href="https://help.instagram.com/581066165581870">TERMS</a>{'\u25CF'}</li>
              <li><a href="https://www.instagram.com/explore/locations/">LOCATION</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="copyRight">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="/">The MetaSquad</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
}

export default InstaFooter;
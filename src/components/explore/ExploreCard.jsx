import React from "react";
import './Explore.css';
import { Avatar } from "@mui/material";
// import Search from "./Search";

const ExploreCard = ({username, caption, url}) => {
    return (
       <> 
            <div className="post">
                <div className="post_header">
                <Avatar
                className="post_avatar" 
                alt="smth" 
                src="/static/images/avatar/1.jpg"/>
                <h3>{username}</h3>
                </div>

                <img className="post_image" src={url} alt=""/>
                <h4 className="post_text"><strong>{username}: </strong>{caption}</h4>
            </div>
       </>
       
    )
}

export default ExploreCard;
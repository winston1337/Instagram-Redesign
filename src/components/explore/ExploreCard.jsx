import React from "react";
import './Explore.css';


const ExploreCard = ({username, caption, url, avatar}) => {
    return (
            <div className="post">
                <div className="post_header">
                <img
                className="post_avatar" 
                alt="smth" 
                src={avatar}/>
                <h3>{username}</h3>
                </div>

                <img className="post_image" src={url} alt=""/>
                <h4 className="post_text"><strong>{username}: </strong>{caption}</h4>
            </div>
    )
}

export default ExploreCard;
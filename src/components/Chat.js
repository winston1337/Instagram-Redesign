import React from "react";
import "./Chat.css";
// import Avatar from "@material-ui/core/Avatar";
import { Avatar } from "@mui/material";

function Chat({ name, message, profilePic, timestamp }){
    return (
        <div className="chat">
            <Avatar className="chat_image" src={profilePic}/>
            <div className="chat_details">
                <p1> {name}</p1>
                <p>{message}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
        </div>
    );
}

    export default Chat;
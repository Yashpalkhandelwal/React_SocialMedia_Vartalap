import React from 'react'
import { Avatar } from '@material-ui/core';
import "./Css/Post.css";

function Post({imgURL, username, caption}) {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar 
            className="post_avatar"
            alt="Yash"
            src="/static/images/avatar/1.jpg" />
            <h3 className="post_username">{username}</h3>
            </div>
            <img 
            className="post_img"
            src={imgURL}                 
            />
            <h4 className="post_caption"><b>{username}</b>: {caption}</h4>
        </div>
    )
}

export default Post

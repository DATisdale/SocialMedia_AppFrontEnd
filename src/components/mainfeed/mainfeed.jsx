import { BusAlertTwoTone } from '@mui/icons-material';
import React from 'react';
import './mainfeed.css'

const MainFeed=()=>{
    return(
        <div className="MainFeed">
            <div className="Feed">
                <h1 classname="user">User</h1>
                <h4 className="status">Status</h4>
                <button type="submit">Post</button>
            </div>
            <div className="Likes and Dislikes">
                <h3 className="Like Posts">("")</h3>
                <button type="submit">Like</button> 
                <h3 className="Dislike Posts">("")</h3>
                <button type="submit">Dislike</button>
            </div>
            <div className="Comments">
                <h3 className="Comments">Comments</h3>
                <h4 className="Write Comments">("")</h4>
                <button type="submit">Post Comment</button>  
            </div>
        </div>
    )
}

export default MainFeed;
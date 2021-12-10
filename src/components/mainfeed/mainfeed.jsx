import { BusAlertTwoTone } from '@mui/icons-material';
import React, { Component} from 'react';
import './mainfeed.css';
import jwtDecode from 'jwt-decode';

class MainFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
        }
    }
    
    JwtDecoder(){
        const jwt = localStorage.getItem("token");
        const decodedUser = jwtDecode(jwt);
        this.state.user = decodedUser;
        console.log(this.state.user);
    }

    // FriendsPosts(){
    //     const findFriends = () => {
    //         let usersFriends = this.state.user.acceptedFriends;
    //         let friendsPosts = usersFriends.map(posts);
    //         console.log(friendsPosts);
    //     }
    // }
    
render(){
         return(
            <div className="Post From Friends">
                <div className="Feed">
                    <h1 classname="user"></h1>
                    <h4 className="status">Status</h4>
               
                </div>
           
                <div className="Likes and Dislikes">
                    <hr />
                    <h3 className="Like Posts">("")</h3>
                    <button type="submit">Like</button> 
                    <h3 className="Dislike Posts">("")</h3>
                    <button type="submit">Dislike</button>
                </div>
           
                <div className="Comments">
                    <hr />
                    <h3 className="Comments">Comments</h3>
                    <h4 className="Write Comments">("")</h4>
                    <button type="submit">Post Comment</button>  
                </div>
            </div>
        )
    }
}
export default MainFeed;
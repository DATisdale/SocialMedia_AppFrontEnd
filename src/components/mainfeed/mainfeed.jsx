import { BusAlertTwoTone } from '@mui/icons-material';
import React, { Component} from 'react';
import './mainfeed.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';


class MainFeed extends Component {
    constructor(props){
        super(props);
        const jwt = localStorage.getItem('token');
            const decodedUser = jwtDecode(jwt);
            const currentUser = decodedUser._id;
            this.state = {
            userId: currentUser,
            user: axios.get(`http://localhost:5000/api/users/current/${currentUser}`),
            }
    }
    
    
    
    FriendsPosts(){
        const findFriends = () => {
            let usersFriends = this.state.user.acceptedFriends;
            console.log(usersFriends);
        }
    }

    render() {
        return(
            <div className="Post From Friends">
                <div className="Feed">
                    <h1 classname="user"></h1>
                    <h4 className="status">Status</h4>
                </div>
           
                <div className="Likes and Dislikes">
                    <hr />
                    <h3 className="Like Posts">("")</h3>
                    <button type="submit">Like{console.log(this.state.user)}</button>
                    <this.FriendsPosts /> 
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
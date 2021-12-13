import React, { useState } from 'react';
import MainFeed from "../MainFeed/MainFeed"
import RightSidebar from "../RightSideBar/RightSideBar";
import LeftSideBar from "../LeftSideBar/LeftSideBar"
import "./Home.css";

const Home = (props) => {
    return (
      <>
        <div className="profile">
        
          {/* <Sidebar /> */}
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="Images/Profile/soccerball.jpeg"
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src="Images/Profile/pug.jpg"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">John Doe</h4>
                  <span className="profileInfoDesc"> ↓What my friends are up to↓</span>
              </div>
            </div>
             
            <div className="profileRightBottom">
            <LeftSideBar/> 
            <MainFeed/>
            <RightSidebar/>
            </div>
          </div>
        </div>
      </>
    );
  }
 
export default Home;
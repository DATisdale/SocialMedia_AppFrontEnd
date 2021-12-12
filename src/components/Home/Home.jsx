import React, { useState } from 'react';
import MainFeed from '../mainfeed/mainfeed';
import RightSidebar from "../RightSideBar/RightSideBar";
import LeftSideBar from "../LeftSideBar/LeftSideBar"
import "./Home.css";

const Home = (props) => {
    return (
      <>
        <div className="profile">
            <LeftSideBar/>
          {/* <Sidebar /> */}
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src=""
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
                  <span className="profileInfoDesc">#1 Sport code page;</span>
              </div>
            </div>
            <div className="profileRightBottom">
              {/* <Feed /> */}
              <RightSidebar/>
            </div>
          </div>
        </div>
      </>
    );
  }
 
export default Home;
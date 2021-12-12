import React from 'react'
import {PermMedia,Label,Room, EmojiEmoticons  } from "@material-ui/icons"

export default function Post(){
     return (
         <div className = "post">
            <div className="postWrapper">
                <div className="postTop">
                  <img src= "" alt = ""/>  
                  <input placeholder =" What is on your mind User? "
                  className ="postInput"
                  />
                </div>
                <hr className ="postHr"/>
                <div className="postBottom">
                    <div className ="postOptions">
                        <div className="postOption">
                            <PermMedia htmlcolor = "tomato" className = " postIcon"/>
                            <span className ="postOptionText">Photo or Video</span>
                        </div>
                        <div className="postOption">
                            <Label htmlColor ="blue" className = " postIcon"/>
                            <span className ="postOptionText">Tag</span>
                        </div>
                        <div className="postOption">
                            <Room htmlColor ="green" className = " postIcon"/>
                            <span className ="postOptionText">Location</span>
                        </div>
                        <div className="postOption">
                            <EmojiEmoticons htmlColor ="goldenrod" className = " postIcon"/>
                            <span className ="postOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="postButton">Share</button>
                </div>
            </div>
         </div>
     )
}
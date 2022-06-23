import React from "react";
import './chatheader.scss'
import profile from '../../props/images/profile-pic.png';
import arrow from '../../props/icons/arrow-left-1.svg'
function ChatHeader(){
    return(
        <div className="ChatHeader">
             <nav>
                <div class="nav-left">
                    <img src={arrow} alt="" />
                </div>
               <div className="nav-right">
               <div className="nav-user-icon online">
                    <img src={profile} alt="img" />
                    </div>
                    <h1>Jeff joel</h1>
               </div>
            </nav>
        </div>
    )
}

export default ChatHeader
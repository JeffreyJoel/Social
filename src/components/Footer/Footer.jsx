import React from "react";
import './footer.css'
import home from "../../props/icons/home-2.svg";
import msg from "../../props/icons/message-text.svg";
import add from "../../props/icons/circle-plus-solid.svg";
import notification from "../../props/icons/notification.svg";
import profile from "../../props/icons/profile-circle.svg";
function Footer(){
    return(
        <div className="footer">
            <div class="Operations">
            <ul>
                <li><img src={home} alt="footImg"/></li>
                <li><img src={msg} class="active" alt="footImg"/></li>
                <li><img src={add} alt="footImg"/></li>
                <li><img src={notification} alt="footImg"/></li>
                <li><img src={profile} alt="footImg"/></li>
            </ul>
        </div>
        </div>
    )
}

export default Footer
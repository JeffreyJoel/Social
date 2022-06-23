import React from "react";
import image from '../../props/icons/gallery.svg';
import microphone from '../../props/icons/microphone-2.svg';
import './chatfooter.scss'
function ChatFooter() {
    return (
        <div className="ChatFooter">
            <div className="Operations">
                <input type="text" placeholder="Start a message" />
               <div className="icon-group">
               <a href="chats.html"><img src={microphone} alt="img"/></a>
                <a href="chats.html"><img src={image} width="30px"  alt="img"/></a>
               </div>
            </div>

        </div>

    )
}

export default ChatFooter

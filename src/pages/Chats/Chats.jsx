import React from "react";
import './chats.css'
import profile from '../../props/images/profile-pic.png';
import searchImg from '../../props/images/search.png';
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";
function Chats() {

    const navigate = useNavigate()
    const handleMsg = ()=>{
        navigate("messages")
    }
    return (
        <div class="container">
            <br />
            <h2>Chats</h2>
            <br />
            <div class="nav-right">
                <div class="search-box">
                    <img src={searchImg} alt="img" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <br />
            <div class="center">
                <div class="chat-bar">

                    <h3>Active Users</h3><br />

                    <div class="nav-user-icon">
                        <div class="online"> <img src={profile} alt="img" /></div>
                        <img src={profile} alt="img" />
                        <div class="online"> <img src={profile} alt="img" /></div>
                        <img src={profile} alt="img" />
                        <img src={profile} alt="img" />
                        <img src={profile} alt="img" />
                        <img src={profile} alt="img" />
                    </div>
                    <br />

                </div>
            </div>

            <br />
            <div class="center">
                <div class="chat-bar">

                    <h3>Messages</h3>

                    <div class="messages">
                        <div class="message-box"
                        onClick={handleMsg}
                        >
                            <img src={profile} class="message-img" alt="img" />
                            <div class="message-text">
                                <div class="message-text-top">
                                    <h4>Jeff joel</h4>
                                    <p>Time stamp</p>
                                </div>
                                <div class="message-text-bottom">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                    </p>
                                </div>


                            </div>

                        </div>

                        <div class="message-box" onClick={handleMsg}>
                            <img src={profile} class="message-img" alt="img" />
                            <div class="message-text">
                                <div class="message-text-top">
                                    <h4>Jeff joel</h4>
                                    <p>Time stamp</p>
                                </div>
                                <div class="message-text-bottom">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="message-box" onClick={handleMsg}>
                            <img src={profile} class="message-img" alt="img" />
                            <div class="message-text">
                                <div class="message-text-top">
                                    <h4>Jeff joel</h4>
                                    <p>Time stamp</p>
                                </div>
                                <div class="message-text-bottom">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="message-box" onClick={handleMsg}>
                            <img src={profile} class="message-img" alt="img" />
                            <div class="message-text">
                                <div class="message-text-top">
                                    <h4>Jeff joel</h4>
                                    <p>Time stamp</p>
                                </div>
                                <div class="message-text-bottom">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Chats
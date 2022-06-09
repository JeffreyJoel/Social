import React from "react";
import './messages.scss';
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
function Messages() {
    return (
        <div className="Messages">
           <ChatHeader/>
            <div class="center">
                <div class="chat-bar">
                    <br />
                    <div class="messages">
                        <div class="message-box">
                            <div class="message-text">
                                <div class="message-text-top">
                                    <h4>sent a message 1</h4>
                                    <p>Time stamp</p>
                                </div>
                                <div class="message-text-bottom">
                                </div>
                            </div>
                        </div>

                        <br />
                        <div class="message-box-2">
                            <div class="message-text-2">
                                <div class="message-text-top">
                                    <h4>sent a message</h4>
                                    <p>Time stamp</p>
                                </div>
                                <div class="message-text-bottom">
                                </div>
                            </div>
                        </div>

                        <br />

                        <div class="messages">
                            <div class="message-box">

                                <div class="message-text">
                                    <div class="message-text-top">
                                        <h4>sent a message</h4>
                                        <p>Time stamp</p>
                                    </div>
                                    <div class="message-text-bottom">


                                    </div>
                                </div>
                            </div>

                            <br />
                            <div class="message-box-2">

                                <div class="message-text-2">
                                    <div class="message-text-top">
                                        <h4>sent a message</h4>
                                        <p>Time stamp</p>
                                    </div>
                                    <div class="message-text-bottom">


                                    </div>
                                </div>
                            </div>
                            <br />

                            <div class="messages">
                                <div class="message-box">

                                    <div class="message-text">
                                        <div class="message-text-top">
                                            <h4>sent a message</h4>
                                            <p>Time stamp</p>
                                        </div>
                                        <div class="message-text-bottom">
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <div class="message-box-2">
                                    <div class="message-text-2">
                                        <div class="message-text-top">
                                            <h4>sent a message</h4>
                                            <p>Time stamp</p>
                                        </div>
                                        <div class="message-text-bottom">
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <div class="message-box">
                                    <div class="message-text">
                                        <div class="message-text-top">
                                            <h4>sent a message</h4>
                                            <p>Time stamp</p>
                                        </div>
                                        <div class="message-text-bottom">
                                        </div>
                                    </div>
                                </div>
                                <br />


                                <div class="message-box-2">

                                    <div class="message-text-2">
                                        <div class="message-text-top">
                                            <h4>sent a message</h4>
                                            <p>Time stamp</p>
                                        </div>
                                        <div class="message-text-bottom">


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ChatFooter />
        </div>
    )
}

export default Messages
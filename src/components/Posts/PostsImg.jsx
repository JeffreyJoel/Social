import React from "react";
import './postsImg.scss';
import profile2 from '../../props/images/photo6.png';
import send from '../../props/icons/send-2.svg';
import comment from '../../props/icons/edit.svg';
import like from '../../props/icons/heart.svg';
import save from '../../props/icons/archive.svg';
function PostImg() {
    return (
        <div className="PostImg">
            <div className="PostImg__upper">
                <div className="PostImg__upper__top">
                    <div className="top-main">
                        <img src={profile2} alt="img" />
                        <div className="PostImg__upper__top__text">
                            <p>Mark Cuban</p>
                            <p>@BigMac</p>
                        </div>
                    </div>
                    <div className="dot"></div>
                </div>
                <p className="PostImg__upper__text">
                    Lorem ipsum dolor sit amet consecteturiiuytt adipisicing elit. Accusantium quos rem minima explicab
                </p>
            </div>
            <div className="PostImg__lower">
                <div>
                    <img src={like} alt="img" />
                    <img src={comment} alt="img" />
                    <img src={send} alt="img" />

                </div>
                <div>
                    <img src={save} alt="img" />
                </div>
            </div>
        </div>
    )
}
export default PostImg
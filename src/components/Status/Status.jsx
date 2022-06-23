import React from "react";
import './status.scss';
import profile from '../../props/images/profile-pic.png';
import profile2 from '../../props/images/photo6.png';
import add from '../../props/icons/add.svg';
export function StatusAdd(){
    return(
        <div className="Status">
            <div className="Status__main add">
                <img src={add} alt="img" id="add"/>
            </div>
            <p>user</p>
        </div>
    )
}
export function Status(){
    return(
        <div className="Status">
            <div className="Status__main">
                <img src={profile} alt="img" />
            </div>
            <p>user</p>
        </div>
    )
}

export function Status2(){
    return(
        <div className="Status">
            <div className="Status__main">
                <img src={profile2} alt="img" />
            </div>
            <p>user</p>
        </div>
    )
}

import React from "react";
import './header.scss';
import menu from '../../props/icons/menu.svg'
function Header(){
    return(
        <div className="Header">
            <div className="Header__main">
            <div className="Header__main__left">Social</div>
            <div className="Header__main__right"><img src={menu} alt="img" /></div>
            </div>
        </div>
    )
}

export default Header
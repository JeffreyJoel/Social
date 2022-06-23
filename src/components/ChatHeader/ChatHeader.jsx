import React from "react";
import './chatheader.scss'
import profile from '../../props/images/profile-pic.png';
<<<<<<< HEAD
import arrow from '../../props/icons/arrow-left-1.svg'
=======
import arrow from '../../props/icons/arrow-left-2.svg'
import {useNavigate} from "react-router";
>>>>>>> 8962c51d6d1817751dbc3628855c1b8a131de980
function ChatHeader(){
    const navigate = useNavigate();
    const handlePrev = ()=>{
        navigate(-1)
    }
    return(
        <div className="ChatHeader">
             <nav>
                <div class="nav-left">
                    <img src={arrow} alt="img" onClick={handlePrev}/>
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
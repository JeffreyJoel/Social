import React from "react";
import './home.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {StatusAdd, Status, Status2 } from "../../components/Status/Status";
import PostText from "../../components/Posts/PostsText";
function Home(){
    return(
        <div className="Home">
         <Header/>   
         <div className="Home__main">
            <div className="Home__main__status">
                <StatusAdd/>
                <Status2/>
                <Status/>
                <Status2/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
            </div>
            <div className="Home__main__posts">
                <PostText/>
            </div>
         </div>
        <Footer/>
        </div>
    )
}

export default Home
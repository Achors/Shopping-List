import React from "react";
import '../App.css';




function PageHeader(){
    return(
        <>
        <div className="Nav-bar">
            <div>
                <img src="../images/AMS-logo.jpeg"/>
            </div>
            <div className="hm-list">
            <p><span>HOME</span></p>
            <p><span>BLOG</span></p>
            <p><span>ABOUT</span></p>
        </div>
        </div>

        </>
    )
}



export default PageHeader;
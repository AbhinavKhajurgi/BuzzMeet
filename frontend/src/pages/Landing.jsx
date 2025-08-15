import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";



export default function Landing(){
    const router=useNavigate();
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navheader">
                    <h2>BuzzMeet</h2>
                </div>
                <div className="navList">
                    <p onClick={()=>{router("/guest")}}>Join as Guest</p>
                    <p onClick={()=>{router("/auth")}}>Register</p>
                    <div role="button" className="buttons" onClick={()=>{router("/auth")}}>
                        Login
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className="col-6">
                    <h2><span style={{color:"orange"}}>Connect</span> with your </h2>
                    <h2>Loved Ones</h2>
                    <br></br>
                    <p style={{marginTop:"2rem"}}>Cover a distance by BuzzMeet</p>
                    <br />

                    <Link to="/auth" className="getStartedBtn">
                        Get Started
                    </Link>

                </div>
                <div className="image">
                    <img style={{marginTop:"2rem"}} src="/mobile.png" alt="notfound" />
                </div>
            </div>
        </div>

        
    )
}
import "./homestyle.css";
import React from "react";
import myphoto from "../asset/myphoto.JPG";
import { Link } from "react-router-dom";

function Homeimage() {
    return (
        <div className="main">
            <div className="container">
                <img className="myphoto" src={myphoto} alt='My Photo' />
            </div>
            <div className="content">
                <h1>Hi, I'm <span>Yohannes Getaneh</span></h1>
                <h2>I am a full-stack developer and freelancer</h2>
                <h3>I am a student at Hawassa University</h3>
                
                <div className="buttons">
                    <Link className="btn" to="/project">Projects</Link>
                    <Link className="btn" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Homeimage;

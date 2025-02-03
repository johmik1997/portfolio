import "./aboutstyle.css";
import React from "react";
import { Link } from "react-router-dom";
import about1 from "../asset/skillimage.webp";
import about2 from "../asset/ciscoimage.webp";
function Aboutimage(){
    return(<div className="aboutcontainer">
<div className="left">
<h1>who Am I ?</h1>
<p> i'm a react front-end developer. <br></br>i create  responsive 
    secure websites for my clients.</p>
    <Link to="/contact" ><button className="btn">contact me</button></Link>  
</div>
<div className="right">
    <div className="image-container">
    <div className="image1">
    <img src={about1} className="img" alt="about me"/>
    </div>
    <div className="image2">
        <img src={about2} className="img"/>
    </div>
    </div>
</div>
    </div>);
}
export default Aboutimage;
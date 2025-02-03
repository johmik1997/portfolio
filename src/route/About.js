import React from "react";
import Navbar from "../component/Navbar";
import Fotter from "../component/Fotter";
import Projectmainpage from"../component/Projectmainpage";
import Aboutimage from "../component/Aboutimage";
import about1 from "../asset/about.jpeg";
function About(){
    return(
        <div>
       <Navbar/>
       <Projectmainpage heading="About Me" text="I'am friendly Fronend Developer "  bgimage={about1}/>
       <Aboutimage/>
       <Fotter/>
        </div>
    );
}
export default About;
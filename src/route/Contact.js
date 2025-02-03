import React from "react";
import Navbar from "../component/Navbar";
import Fotter from "../component/Fotter";
import Projectmainpage from"../component/Projectmainpage";
import Form from "../component/Form";
import contactimage from"../asset/contactme.jpg";
function Contact(){
    return(
        <div>
         <Navbar/>
         <Projectmainpage heading="CONTACTS." text="you can contact me " bgimage={contactimage}/>
         <Form/>
         <Fotter/>
        </div>
    );
}
export default Contact;
import { FaFacebook, FaHome,FaInstagram,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
import "./fotter.css";
function Fotter(){
return(<div className="footer">
<div className="footer-container">
<div className="left">
   <div className="location">
    <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
    <div>
    <p>
     Gotera 47 sefer
    </p>
    <p>Addis Ababa, Ethiopia</p>
   </div>
   </div>
   
   <div className="phone">
    <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
    <div>
        <h4>
   +251 976304775</h4>
   </div>
   </div>
   

   <div className="email">
    <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
    <div>
    <h4>
   yohannesgeta9@gmail.com
    </h4>
   </div>
   </div>
   
</div>
<div className="right">
    <h3>About the company</h3>
    <p>This is yohannes getaneh CEO & founder of Derash pharmacy mgt system
        i enjoy discussing new projects and new challenges
    </p>
    <div className="email">
    <FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/>
    <FaTwitter size={20} style={{color:"white",marginRight:"2rem"}}/>
    <FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/>
   </div>
</div>
</div>
</div>);
}
export default Fotter;
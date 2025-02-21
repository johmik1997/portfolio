import { Component } from "react";
import "./projectmainpage.css";
class Projectmainpage extends Component{
    render(){
        return(
        <div className="cont"   style={{ backgroundImage: `url(${this.props.bgimage})` }}>
           
        <div className="container">
            <h1>
         {this.props.heading}
            </h1>
<p>{this.props.text}</p>
        </div>
        </div>
    );}
    
}
export default Projectmainpage;
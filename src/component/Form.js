import "./formstyles.css";
import React from "react";
function Form(){
    return(
    <div className="form-container">
        <form>
            <label>your name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>subject</label>
            <input type="text"></input>
            <label>message</label>
            <textarea type="text"  rows="6" placeholder="type your message"></textarea>
            <button className="btn"> submit</button>

        </form>
    </div>);
}
export default Form;
import React from "react";
import "./pricingcard.css";
import { Link } from "react-router-dom";
function Pricingcard(){
    return(
        <div className="pricing">
        <div className="card-cont">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="free-trial">$ 100</p>
                <p>- 3 Days-</p>
                <p>- 3 Pages-</p>
                <p>- Featured-</p>
                <p>- Responsive Design-</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>-priemium-</h3>
                <span className="bar"></span>
                <p className="free-trial">$ 200</p>
                <p>- 5 Days-</p>
                <p>- 8 Pages-</p>
                <p>- Featured-</p>
                <p>- Responsive Design-</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>-business-</h3>
                <span className="bar"></span>
                <p className="free-trial">$ 300</p>
                <p>- 8 Days-</p>
                <p>- 10 Pages-</p>
                <p>- Featured-</p>
                <p>- Responsive Design-</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
        </div>
        </div>
    );
}
export default Pricingcard;
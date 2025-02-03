import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [clicked, setClicked] = useState(false);

    function handleClicked() {
        setClicked(!clicked);
    }

    return (
        <div className="navcontainer">
            <Link to="/" className="logo">
                <h1>Port<span>folio</span></h1>
            </Link>
            
            {/* Fixed class toggle */}
            <ul className={clicked ? "navmenu active" : "navmenu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            {/* Fixed hamburger menu */}
            <div className="hyfens" onClick={handleClicked}>
                {!clicked ? ( // Show Bars (☰) when menu is closed
                    <FaBars size={24} style={{ color: "white" }} />
                ) : ( // Show Times (✖) when menu is open
                    <FaTimes size={24} style={{ color: "white" }} />
                )}
            </div>
        </div>
    );
}

export default Navbar;

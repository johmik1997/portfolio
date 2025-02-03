import React from "react";
import "./workcard.css";
import { NavLink } from "react-router-dom";

function WorkingCard({ imgSrc, title, text, view }) {
    return (
        <div className="project-card">
            <img src={imgSrc} alt={title} className="project-image" />
            <h2 className="project-title">{title}</h2>
            <p className="project-detail">{text}</p>
            <div className="btn-container">
                <NavLink to={view} className="btn">View</NavLink>
                <NavLink to="https://johmik1997.com" className="btn">Source</NavLink>
            </div>
        </div>
    );
}

export default WorkingCard;

import React from "react";
import "./workcard.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; 

function WorkingCard({ imgSrc, title, text, view }) {
    return (
        <motion.div 
            className="project-card"
            whileHover={{ scale: 1.05 }} // Card slightly enlarges on hover
            transition={{ type: "spring", stiffness: 200 }}
        >
            <motion.img 
                src={imgSrc} 
                alt={title} 
                className="project-image"
                whileHover={{ scale: 1.1 }} // Image zooms in slightly
            />
            <h2 className="project-title">{title}</h2>
            <p className="project-detail">{text}</p>
            <div className="btn-container">
                <NavLink to={view} className="btn">View</NavLink>
                <NavLink to="https://johmik1997.com" className="btn">Source</NavLink>
            </div>
        </motion.div>
    );
}

export default WorkingCard;

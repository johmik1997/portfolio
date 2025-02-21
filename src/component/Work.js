import React from "react";
import "./workcard.css";
import {useState} from "react";
import Workingcard from "./Workingcard";
import Workcarddata from "./Workcarddata";
import { motion } from "framer-motion";

function Work() {
    const [isAnimating, setIsAnimating] = useState(true);

  const handleMouseEnter = () => {
    setIsAnimating(false); // Stop the animation when mouse enters
  };

  const handleMouseLeave = () => {
    setIsAnimating(true); // Restart the animation when mouse leaves
  };
    return (
        <div className="work">
            <h1 className="project-heading">Projects</h1>

            {/* Scrolling Animation Container */}
            <div className="carousel">
            <motion.div
      className="carousel-inner"
      onMouseEnter={handleMouseEnter} // Stops the animation on hover
      onMouseLeave={handleMouseLeave} // Resumes the animation when hover ends
      animate={isAnimating ? { x: ["0%", "-100%", "-100%", "0%"] } : { x: "0%" }}
      transition={{
        ease: "linear",
        duration: 10,
        repeat: isAnimating ? "infinity" : 0, // Infinite loop when animating
      }}
    >
                    {Workcarddata.map((val, ind) => (
                        <div className="carousel-item" key={ind}>
                            <Workingcard 
                                imgSrc={val.image}
                                title={val.title}
                                text={val.text}
                                view={val.view}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Work;

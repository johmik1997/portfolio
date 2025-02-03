import React from "react";
import "./workcard.css";
import Workingcard from "./Workingcard"; // Fixed typo
import Workcarddata from "./Workcarddata"; // Fixed typo
function Work() {
    return (
        <div className="work">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {Workcarddata.map((val, ind) => (
                    <Workingcard 
                        key={ind}
                        imgSrc={val.image} // Fixed typo "imasrc" → "imgSrc"
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                ))}
            </div>
        </div>
    );
}

export default Work;

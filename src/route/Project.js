import React from "react";
import Navbar from "../component/Navbar";
import Fotter from "../component/Fotter"; // Fixed typo "Fotter" → "Footer"
import Projectmainpage from "../component/Projectmainpage"; // Fixed typo
import PricingCard from "../component/Pricingcard"; // Fixed typo
import Work from "../component/Work.js";
import projectimage from "../asset/projectimage.jpg";

function Project() {
    return (
        <div>
            <Navbar />
            <Projectmainpage heading="PROJECTS" text="Some of my recent works" bgimage={projectimage}/>
            <Work />
            <PricingCard />
            <Fotter />
        </div>
    );
}

export default Project;

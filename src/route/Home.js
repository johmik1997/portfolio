import React from "react";
import Navbar from "../component/Navbar";
import Homeimage from "../component/Homeimage";
import Work from "../component/Work.js";
import Fotter from "../component/Fotter";
function Home(){
    return(
        <div>
          <Navbar/>
          <Homeimage/>
          <Work/>
          <Fotter/>
        </div>
    );
}
export default Home;
import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";


function Footer() {
  return (
    <>
    <div className="footer" style={{'widows':'100%'}}>
      <img src={Wave} alt="" />
    
    <div className="fcontent">
<span>codexsabir@gmail.com</span>
<div className="ficons">
  <Insta color='white' size='3rem'/>
  <Facebook color='white' size='3rem'/>
  <Gitub color='white' size='3rem'/>
</div>
    </div>
    </div>
    </>
  )
}

export default Footer
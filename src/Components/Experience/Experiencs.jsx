import React from 'react'
import './Experience.css'
import { themeContext } from "../../Context";
import { useContext } from "react";

function Experiencs() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div className="experience" id='Experience'>
<div className="ahci" >
<div className="circle" style={darkMode? {'background': 'white', 'color':'black'}:{'background':'', 'color':'black'}}>8+</div>
<span>Years</span>
<span>Experience</span>
</div>

<div className="ahci">
<div className="circle" style={darkMode? {'background': 'white', 'color':'black'}:{'background':'', 'color':'black'}}>20+</div>
<span>Complted</span>
<span>Projects</span>
</div>

<div className="ahci">
<div className="circle" style={darkMode? {'background': 'white', 'color':'black'}:{'background':'', 'color':'black'}}>5+</div>
<span>Companies</span>
<span>Work</span>
</div>

    </div>
    </>
  )
}

export default Experiencs
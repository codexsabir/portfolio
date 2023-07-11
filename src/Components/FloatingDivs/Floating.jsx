import './Floating.css'
import React from 'react'
import { themeContext } from "../../Context";
import { useContext } from "react";

function Floating(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div className="floatingimg" style={darkMode? {'background': 'black', 'color':'white'}:{'background':'', 'color':'black'}}>
<img src={props.image} alt="" />
<span>
    {props.txt1}<br/>
    {props.txt2}
</span>
    </div>
    </>
  )
}

export default Floating
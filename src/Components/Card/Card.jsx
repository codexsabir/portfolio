import React from 'react'
import './Card.css'
import { themeContext } from "../../Context";
import { useContext } from "react";


function Card(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
    <div className="card">
   <img src={props.image} alt="" />
   <span>{props.heading}</span>
   <span>{props.detail}</span>
   <div className="cbutton" style={darkMode? {'background': 'black'}:{'color':''}}>LEARN MORE</div>
    </div>
    
    </>
  )
}

export default Card;
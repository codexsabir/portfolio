import './Services.css'
import React from 'react'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Hummble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from "./wind.lnk";
import { motion } from 'framer-motion';

function Services() {
  const transition = {duration : 1, type: 'spring'}
  return (
    <>
    <div className="smain" id='Services'>
   <div className="slchi">
   <span>My Awesome</span>
   <span>services</span>
   <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit dolorum <br/>officiis ipsum. Nam eos ratione nesciunt. Ratione.</span>
<a href={Resume} Download> 
<div className="button sbutton">Download CV</div> </a>
<div className="blur sblur" style={{'background-color': '#ABF1FF94'}}></div>
   </div>
 
 <div className="srchi">
<motion.div
initial={{left: '15rem'}}
whileInView={{left: '22rem'}}
transition={transition}
style={{left:'15rem'}}>
    <Card 
    image={HeartEmoji}
    heading='Design'
    detail='Figma, sketch photo shop ,and adobe'
    />
</motion.div>

<motion.div
initial={{left:'-4rem', 'top': '12rem'}}
whileInView={{left: '1rem'}}
transition={transition}
style={{left:'-4rem', 'top': '12rem'}}>
    <Card 
    image={Glasses}
    heading='Developer'
    detail='Html, Css, React, Bootstrap, JavaScript'
    />
</motion.div>

<motion.div 
initial={{left:'12rem', 'top': '19rem'}}
whileInView={{left: '20rem'}}
transition={transition}
style={{left:'12rem', 'top': '19rem'}}>
    <Card 
    image={Hummble}
    heading='UI/UX'
    detail='Figma, sketch photo shop ,and adobe'
    />
</motion.div>
<div className="blur sblur2" style={{'background-color': 'var(--purple)'}}></div>
 </div>


    </div>
    
    </>
  )
}

export default Services
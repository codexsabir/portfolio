import './Intro.css';
import React from 'react'
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/boy.png"
import Thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Glassesemojie from "../../img/glassesimoji.png"
import Floating from '../FloatingDivs/Floating';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Into() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration : 2, type: 'spring'}
  return (
   <>
   <div className="imain" id='home'>
   
   <div className="ilchi">
   <div className="iname">
    <span style={darkMode? {'color': 'white'}:{'color':''}}>Hy! I Am</span>
    <span>Muhammad Jasim</span>
    <span>Frontend Developer with high Level of experience in web desigining and development producting the wuality work</span>

    <div className="button i-button">Haire me</div>

    <div className="iicons">
<img src={Github} alt="git" />
<img src={Linkedin} alt="git" />
<img src={Instagram} alt="git" />
    </div>
   </div>

   </div>

<div className="irchi">
<img src={Vector1} alt="" />
<img src={Vector2} alt="" />
<img src={Boy} alt="" />
<motion.img 
initial={{left: '-36%'}}
whileInView={{left: '-24%'}}
transition={transition}
src={Glassesemojie} alt="" />

<motion.div className='fdiv'
initial={{top: '-4%',left: '74%'}}
whileInView={{left: '68%'}}
transition={transition}
style={{'top':'-4%', 'left': '68%'}}>
    <Floating image={Crown} txt1='Web' txt2='Developer'/>
</motion.div>

<motion.div className='fdiv'
initial={{top: '18rem',left: '0rem'}}
whileInView={{left: '-3rem'}}
transition={transition}
style={{'top':'18rem', 'left': '0rem'}}>
<Floating image={Thumbup} txt1='Best Design' txt2='Award'/>
</motion.div>
{/* blur color */}
<div className="blur"></div>
<div className="blur" style={{'background-color':'#C1F5FF', 'top':'17rem', 'left':'-9rem' ,'height': '11rem', 'width':'21rem'}}></div>

<Link spy={true} to='home' smooth={true}>
<div className="top">#</div></Link>
</div>

   </div>
   </>
  )
}

export default Into
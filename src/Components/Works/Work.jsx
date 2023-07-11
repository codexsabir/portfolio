import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopigy from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'


function Work() {
  return (
    <>
    <div className="wmain">
  <div className="slchi">
  <span>Works for All these</span>
   <span>Brands & Clients</span>
   <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Omnis sit dolorum officiis ipsum. Nam ratione nesciunt. Ratione.<br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Eaque, natus. Sapiente quae nihil nemo!</span>

<div className="button sbutton">Hire me</div>
<div className="blur sblur" style={{'background-color': '#ABF1FF94'}}></div>

  </div>
{/* right side */}
<div className="wrchi">
<motion.div
initial={{ rotate: 45 }}
whileInView={{ rotate: 0 }}
viewport={{margin: '-40px'}}
transition={{ duration: 3.5, type: 'spring'}}
className="wcircle">
    <div className="csircle">
<img src={Upwork} alt="" />
</div>

<div className="csircle">
<img src={Fiver} alt="" />
</div>

<div className="csircle">
<img src={Amazon} alt="" />
</div>

<div className="csircle">
<img src={Shopigy} alt="" />
</div>

<div className="csircle">
<img src={Facebook} alt="" />
</div>

<div className="bagcirc bluecir"></div>
<div className="bagcirc yellowcir"></div>
</motion.div>

</div>


    </div>
    </>
  )
}

export default Work
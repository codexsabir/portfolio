import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'
import { Link } from 'react-scroll'

function Navbar() {
  return (
  <>
<div className="nmain">

<div className="nlchi">
<div className="name">Jasim 
<span><Toogle/></span>
</div>
</div>

<div className="rnchi">
<div className="nlist">
<ul>
  <Link spy={true} to='home' smooth={true} activeClass="activeClass">
<li>Home</li>
</Link>
<Link spy={true} to='Services' smooth={true}>
<li>Services</li>
</Link>
<Link spy={true} to='Experience' smooth={true}>
<li>Experience</li>
</Link>
<Link spy={true} to='Portfolio' smooth={true}>
<li>Portfolio</li>
</Link>
<Link spy={true} to='Testimonil' smooth={true}>
<li>Testimonials</li>
</Link>
</ul>
</div>
<div className="button n-button">Contact us</div>
</div>


</div>
  </>
  )
}

export default Navbar
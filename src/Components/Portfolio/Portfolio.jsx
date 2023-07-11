import React from 'react'
import './Portfplio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sliderbar from'../../img/sidebar.png';
import Ecomermmerce from'../../img/ecommerce.png';
import Hoc from'../../img/hoc.png';
import MusicApp from'../../img/musicapp.png';
import 'swiper/css'

function Portfolio() {
  return (
    <div className="portpho" id='Portfolio'>
{/* Heading   */}
<span>Recent Pojcts</span>
<span>Portfolio</span>

{/* Slider */}

<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className='.portphoe'
>
<SwiperSlide>
    <img src={Sliderbar} alt="" />
</SwiperSlide>

<SwiperSlide>
    <img src={Ecomermmerce} alt="" />
</SwiperSlide>

<SwiperSlide>
    <img src={MusicApp} alt="" />
</SwiperSlide>

<SwiperSlide>
    <img src={Hoc} alt="" />
</SwiperSlide>
</Swiper>

    </div>
  )
}

export default Portfolio
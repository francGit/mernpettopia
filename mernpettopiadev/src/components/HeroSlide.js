import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSlide = () => {
  return (
    <div> 
      <Swiper
        className='myHeroSlide'
        navigation={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        pagination={{
            clickable: true,
          }}
          modules={[ Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
        <div className="itemSlide">
                           <img src="image/delivery.svg" alt="" className="img-fluid pt-5 mt-4" ></img>
                       </div>
                        
        </SwiperSlide>
        <SwiperSlide>
        <div className="itemSlide">
                             <img src="image/imgslider.svg" alt="" className="img-fluid"></img>
                         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="itemSlide">
                             <img src="image/dogwoman.svg" alt="" className="img-fluid"></img>
                         </div>
        </SwiperSlide>
        

      </Swiper>
    </div>
  )
}

export default HeroSlide

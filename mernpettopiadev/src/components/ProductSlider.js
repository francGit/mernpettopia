import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'; 
import ItemServSlide from './ItemServSlide';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
///import img
import img1 from '../img/Bano_y_peluqueria.svg';
import img2 from '../img/Vacunacion.svg';
import img3 from '../img/Servicios_dentales.svg';
import img4 from '../img/Guarderia_y_hotel.svg';
import img5 from '../img/Atencion_de_urgencias.svg';
import img6 from '../img/on_demand_icon.svg';
import img7 from '../img/ConsultaGeneral.svg';
import img8 from '../img/Tratamientos_de_heridas.png';
import img9 from '../img/Laboratorio.svg';
import img10 from '../img/Cirugia.svg';

const ProductSlider = () => {
  return (
    <div className='py-4 px-4 justify-content-center'>
        <Swiper
            freeMode={true}
            grabCursor ={true}
            modules={[FreeMode,Autoplay, Pagination]}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
            pagination={{
                clickable: true,
              }} 
            className="mySwiperServices"
            slidesPerView={4}
            spaceBetween = {30}
            breakpoints={{
                 // when window width is >= 640px
                 390: {
                    width: 200,
                    slidesPerView: 1,
                  },
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                1024: { 
                  slidesPerView: 4,
                },
              }}
        > 
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img1, nameService:'Baño y peluquería'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img2, nameService:'Vacunación'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img3, nameService:'Profilaxis'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img4, nameService:'Guarderia y hotel'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img5, nameService:'Urgencias'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img6, nameService:'Servicios en casa'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img7, nameService:'Consulta general'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img8, nameService:'Tratamientos de heridas'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img9, nameService:'Exámenes de laboratorio'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ItemServSlide data={{imgSrcSlide:img10, nameService:'Cirugía'}} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductSlider;
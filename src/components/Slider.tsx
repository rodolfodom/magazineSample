import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/slider.css';


export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiperContainer"
    >
      <SwiperSlide className="swiperSlide"
        style={{
          background: "linear-gradient(45deg, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.7) 90%), url('https://picsum.photos/1200/600?random=1')",
        }}
      >
        <div className="slideContent">

          <h3>Lorem ipsum dolor sit amet consectetur .</h3>
          <p>
            Quo non, consequatur asperiores dolores sequi esse maxime dolor magni magnam corrupti alias, sed placeat eaque quas accusantium reprehenderit necessitatibus deleniti. Ea?
          </p>
          <button>
            Leer más
          </button>

        </div>

      </SwiperSlide>
      <SwiperSlide
        className="swiperSlide"
        style={{
          background: "linear-gradient(45deg, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.6) 90%), url('https://picsum.photos/1200/600?random=2')",
        }}
      >

        <div className="slideContent">

          <h3>Lorem ipsum dolor sit amet consectetur .</h3>
          <p>
            Quo non, consequatur asperiores dolores sequi esse maxime dolor magni magnam corrupti alias, sed placeat eaque quas accusantium reprehenderit necessitatibus deleniti. Ea?
          </p>
          <button>
            Leer más
          </button>

        </div>


      </SwiperSlide>
      <SwiperSlide
        className="swiperSlide"
        style={{
          background: "linear-gradient(45deg, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.7) 90%), url('https://picsum.photos/1200/600?random=3')",

        }}
      >
        <div className="slideContent">

          <h3>Lorem ipsum dolor sit amet consectetur .</h3>
          <p>
            Quo non, consequatur asperiores dolores sequi esse maxime dolor magni magnam corrupti alias, sed placeat eaque quas accusantium reprehenderit necessitatibus deleniti. Ea?
          </p>
          <button>
            Leer más
          </button>

        </div>

      </SwiperSlide>
      <SwiperSlide
        className="swiperSlide"
        style={{
          background: "linear-gradient(45deg, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.7) 90%), url('https://picsum.photos/1200/600?random=4')",
        }}
      >
        <div className="slideContent">

          <h3>Lorem ipsum dolor sit amet consectetur .</h3>
          <p>
            Quo non, consequatur asperiores dolores sequi esse maxime dolor magni magnam corrupti alias, sed placeat eaque quas accusantium reprehenderit necessitatibus deleniti. Ea?
          </p>
          <button>
            Leer más
          </button>

        </div>

      </SwiperSlide>
    </Swiper>
  );
};
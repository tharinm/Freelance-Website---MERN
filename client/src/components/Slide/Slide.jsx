import React from "react";
import "./Slide.scss";

import { cards } from "../../data";
import CatCard from "../catCard/CatCard";
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Slide() {
  //   const cardComponents = cards.map((item) => {
  // return <CatCard item={item} key={item.id} />;
  //   });

  return (
    <div className="slide">
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          scrollbar={{ draggable: true }}
         
          
        >
          <SwiperSlide>
            <CatCard item={cards[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <CatCard item={cards[7]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

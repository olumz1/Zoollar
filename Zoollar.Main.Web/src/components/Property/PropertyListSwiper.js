import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperCore, {
  Thumbs,
  FreeMode,
  Navigation,
  A11y,
  Pagination,
} from "swiper";
import "./styles.css";
SwiperCore.use([Navigation]);

function PropertyListSwiper({ propertyImages, id }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const Id = id;
  return (
    <>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, A11y, Pagination]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={1}
        slidesPerView={1}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        watchOverflow={true}
        loop={true}
        allowTouchMove={false}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper2"
        style={{ "--swiper-navigation-size": "25px", padding: "0px" }}
        key={Id}
      >
        {propertyImages?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.imageUrl} alt={`Property ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs, FreeMode, Thumbs]}
        watchSlidesProgress={true}
        direction="vertical"
        allowTouchMove={false}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
        spaceBetween={3}
        freeMode={true}
        className="mySwiper"
      >
        {propertyImages?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.imageUrl} alt={`Property ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PropertyListSwiper;

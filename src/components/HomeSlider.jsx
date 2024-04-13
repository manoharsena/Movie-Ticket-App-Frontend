import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

const width = window.innerWidth;
const height = window.innerHeight;
const HomeSlider = () => {
  const [banners, setBanners] = useState([
    {
      imgUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg",
    },
    {
      imgUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1712661700827_hg3web.jpg",
    },
    {
      imgUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1712655016433_mrvsmrsweb.jpg",
    },
    {
      imgUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1712900940778_u1longdriveliveinconcertweb.jpg",
    },
  ]);

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={banner.imgUrl}
              alt=""
              width={width}
              height={height / 2}
              style={{
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;

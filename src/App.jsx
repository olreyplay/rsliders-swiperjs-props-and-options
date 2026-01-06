import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function PropsExampleSlider() {
  return (
    <div style={{ width: "700px", margin: "40px auto" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        direction="horizontal"
      >
        <SwiperSlide>
          <div style={slideStyle}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const slideStyle = {
  height: "180px",
  background: "#0ea5e9",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  borderRadius: "8px",
};

export default PropsExampleSlider;

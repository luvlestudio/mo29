import { gallerySwiperStore } from "../../store/gallerySwiperStore";
import { Swiper, SwiperSlide } from "swiper/react";
import * as CSTM from "../../custom/custom";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

// Container for Swiper
const SwiperContainer = styled.div`
  width: 100%;
  height: 100%; /* Ensure the container's height is based on its content */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background with opacity */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function GallerySwiper() {
  const swiperRef = useRef(null);
  const { isOpen, imgIndex, closeGallerySwiper } = gallerySwiperStore();
  const imgList = CSTM.큰갤러리사진리스트;

  useEffect(() => {
    handleSlideTo(imgIndex);
  }, [imgIndex]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleClickOverLay = (e) => {
    if (e.target === e.currentTarget) {
      closeGallerySwiper();
    }
  };

  const handleSlideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 0); // Directly access swiperRef.current
    }
  };

  return (
    <>
      {isOpen && (
        <SwiperContainer onClick={handleClickOverLay}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ type: "fraction" }}
            navigation={true}
            modules={[Navigation]}
            style={{
              height: "auto",
            }} /* Ensure Swiper adjusts to the content */
          >
            {imgList.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{
                  height: "auto",
                  backgroundColor: "rgba(0, 0, 0, 0.0)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={img.src}
                  alt={`갤러리 이미지 ${index}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      )}
    </>
  );
}

export default GallerySwiper;

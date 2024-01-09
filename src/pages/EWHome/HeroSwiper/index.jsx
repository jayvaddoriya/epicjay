import { EWSwiper } from "../../../components/";
import { SwiperSlide } from "swiper/react";
import { swiperSlideHeroHome } from "../../../utils/json";
import "../home.css";

export const HeroSwiper = () => {
  return (
    <section className="hero-swiper-wrapper">
      <EWSwiper
        slidesPerView={"1.3"}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {swiperSlideHeroHome.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="ratio hero-swiper-img border-radius-10 overflow-hidden">
              <img src={content.src} className="object-cover" alt="bg-images" />
            </div>
          </SwiperSlide>
        ))}
      </EWSwiper>
    </section>
  );
};

import { RecentWinsData } from "../../../utils/json";
import { EWAvatar, EWSwiper } from "../../../components";
import { SwiperSlide } from "swiper/react";
import { avatar, money } from "../../../utils/images";
import "../home.css";

export const RecentWins = () => {
  return (
    <section className="recent-wins">
      <div className="">
        <h2 className="p">🎉 Recent Big Wins</h2>
      </div>
      <EWSwiper slidesPerView={2.1} spaceBetween={12}>
        {RecentWinsData.map((content, index) => (
          <SwiperSlide key={`swiper+${index}`}>
            <div className="RecentWins-slider-wrapper flex">
              <EWAvatar
                className="RecentWinsDataAvatar"
                shape={"circle"}
                src={avatar}
              />
              <div className="flex RecentWinsData-wrapper">
                <h6 className="sm">{content.name}</h6>
                <div className="flex RecentWinsData-money-wrapper">
                  <div>
                    <img src={money} />
                  </div>
                  <h4 className="p sm text-dark-dim-green text-bold">
                    +{content.money}
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </EWSwiper>
    </section>
  );
};

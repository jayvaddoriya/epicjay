import { EWAvatar } from "../../components";
import { avatar } from "../../utils/images";
import { Games } from "./Games";
import { HeroSwiper } from "./HeroSwiper";
import { RecentWins } from "./RecentWins";
import "./home.css";

export const EWHome = () => {
  return (
    <>
      <HeroSwiper />
      <RecentWins />
      <Games />
    </>
  );
};

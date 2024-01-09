import { crow } from "../../../utils/images";
import { homeGames } from "../../../utils/json";
import "../home.css";
export const Games = () => {
  return (
    <section className="game-wrapper">
      <div className="flex game-heading-wrapper">
        <div className="crow-wrapper">
          <img src={crow} />
        </div>
        <h2>Games</h2>
      </div>
      <div className="grid games-grid-wrapper">
        {homeGames.map((content, index) => (
          <div className="bg-black border-radius-10" key={`gameCard+${index}`}>
            <div className="ratio">
              <img
                src={content.src}
                className="border-radius-10 object-cover"
              />
              {content.islive && (
                <div className="game-live p sm fw-medium">
                  <span className="block white-dot"></span>
                  Live
                </div>
              )}
            </div>
            <h6 className="text-center fw-bold game-card-title">{content.heading}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

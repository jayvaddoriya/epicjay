import fullLogo from "../../assets/images/logo/full-logo.svg";
import avatar from "../../assets/images/avatar/avatar.png";
import money from "../../assets/images/cover/money.png";
import { Container, EWAvatar, EWButton } from "../../components";
import "./welcome.css";

export const EWWelcome = () => {
  return (
    <section>
      <Container>
        <div className="welcome-page-wrapper flex flex-col">
          <div className="welcome-page-content-wrapper pb-4">
            <div className="welcome-page-content-logo">
              <img src={fullLogo} />
            </div>
            <div className="welcome-page-avater-wrppaer">
              <div className="relative welcome-page-avater">
                <EWAvatar src={avatar} size={105} />
                <div className="absolute avater-icon">🎉</div>
              </div>
              <div>
                <h4 className="welocme-text">
                  Welcome! <br />
                  <span className="welocme-cleint-name-text h2">
                    Ashish Kumar
                  </span>
                </h4>
              </div>
            </div>
            <div className="welcome-bounes">
              <div className="welcome-bounes-money">
                <img src={money} />
                <h2>+20</h2>
              </div>
              <p>
                Congratulations! Your welcome bonus has been added to your
                wallet
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <EWButton variant={"primary"}>Let&#39;s Play</EWButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

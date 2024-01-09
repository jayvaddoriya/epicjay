import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../../utils/Icons";
import { EWButton } from "../EWButton";
import "./header.css";
import { fullLogo } from "../../utils/images";

export const EWHeader = ({ authincation }) => {
  const navigation = useNavigate();
  return (
    <header>
      <div className="header-wrapper grid">
        <div className="header-left-side">
          <Link to={"/"}>
            <img src={fullLogo} />
          </Link>
        </div>
        <div className="header-right-side">
          {authincation == true ? (
            <></>
          ) : (
            <span className="flex login-button-wrapper">
              Login
              <EWButton
                variant={"primary"}
                className="login-button"
                handelChange={() => navigation("/login")}
              >
                {Icons.rightArrow}
              </EWButton>
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

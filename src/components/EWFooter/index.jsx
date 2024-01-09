import { NavLink } from "react-router-dom";
import "./footer.css";
import { footerLink } from "../../utils/json";

export const EWFooter = () => {
  return (
    <footer className="footer  mt-auto">
      <div className="footer-wrapper grid text-center">
        {footerLink.map((content, index) => (
          <NavLink to={content.slug} key={index}>
            <div className="footer-icon">{content.icons}</div>
            <h3 className="p sm text-white">{content.label}</h3>
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

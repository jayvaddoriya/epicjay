import { Outlet } from "react-router-dom";
import { Container, EWFooter, EWHeader } from "../../components";
import "./home-layout.css";

export const HomeLayout = () => {
  return (
    <div>
      <Container className="flex flex-col">
        <EWHeader />
        <div className="home-layout-wrapper">
          <Outlet />
        </div>
        <EWFooter />
      </Container>
    </div>
  );
};

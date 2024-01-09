import { Link, useNavigate } from "react-router-dom";
import dhoni from "../../assets/images/cover/dhoni.png";
import fullLogo from "../../assets/images/logo/full-logo.svg";
import { Container, EWButton, EWInput } from "../../components";
import "../EWLogin/login.css";
import { Form } from "antd";

export const EWSignUp = () => {
  const navigation = useNavigate();

  const onFinishLogin = (values) => {
    console.log("Success:", values);
  };

  return (
    <section>
      <Container>
        <div className="login-wrapper relative">
          <div className="login-header-logo absolute">
            <img src={fullLogo} />
          </div>
          <div className="login-dhoni-wrapper">
            <img className="w-full" src={dhoni} />
          </div>
          <div className="login-bottom-wrapper">
            <div className="login-botton-content-wrapper">
              <h1>
                India’s No.
                <br /> 1 Gaming App
              </h1>
              <ul className="login-bottom-listing-wrapper">
                <li>Instant Withdrawls</li>
                <li>5Lac+ Users Playing Live</li>
              </ul>
            </div>
            <Form onFinish={onFinishLogin} autoComplete="off">
              <div>
                <EWInput
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                  placeholder="Enter Your Name"
                />
                <EWInput
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your mobile number!",
                    },
                  ]}
                  placeholder="Enter your mobile number"
                />
              </div>
              <Form.Item>
                <EWButton variant="primary" htmlType="submit">
                  Sign Up
                </EWButton>
              </Form.Item>
            </Form>
            <p className="xl sign-up-lable">
              Already have an account
              <Link to="/login" className="sign-up-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

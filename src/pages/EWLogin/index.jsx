import { Link, useNavigate } from "react-router-dom";
import dhoni from "../../assets/images/cover/dhoni.png";
import fullLogo from "../../assets/images/logo/full-logo.svg";
import { Container, EWButton, EWInput } from "../../components";
import "./login.css";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, setPhoneNumber } from "../../redux/features/Login/loginSlice";
import { useState } from "react";

export const EWLogin = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { isLoginLoading } = useSelector((state) => state.loginSlice);

  const onFinishLogin = (values) => {
    console.log("Success:", values);
    dispatch(setPhoneNumber(values.phone));
    const onSuccessCallback = (res) => {
      console.log(res);
      if (res) {
        message.success("OTP sent Successfully");
        navigation("/verification");
      }
    };
    dispatch(sendOtp(values, onSuccessCallback));
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
                India’s No. 1 <br />
                Gaming App
              </h1>
              <ul className="login-bottom-listing-wrapper">
                <li>Instant Withdrawls</li>
                <li>5Lac+ Users Playing Live</li>
              </ul>
            </div>
            <Form onFinish={onFinishLogin} autoComplete="off">
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
              <Form.Item>
                <EWButton
                  variant="primary"
                  htmlType="submit"
                  loading={isLoginLoading}
                >
                  Login
                </EWButton>
              </Form.Item>
            </Form>
            <p className="xl sign-up-lable">
              Don’t have the account
              <Link to="/sign-up" className="sign-up-link">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

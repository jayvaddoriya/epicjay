import { useNavigate } from "react-router-dom";
import fullLogo from "../../assets/images/logo/full-logo.svg";
import { Container, EWButton } from "../../components";
import "../EWLogin/login.css";
import { InputOTP } from "antd-input-otp";
import { useDispatch, useSelector } from "react-redux";
import { message, Form } from "antd";
import { sendOtp } from "../../redux/features/Login/loginSlice";

export const EWVerification = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { phoneNumber } = useSelector((state) => state.loginSlice);

  const onResentOtp = () => {
    const values = {
      phone: phoneNumber,
    };
    const onSuccessCallback = (res) => {
      console.log(res);
      if (res) {
        message.success("OTP sent Successfully");
      }
    };
    dispatch(sendOtp(values, onSuccessCallback));
  };

  const handleFinish = (values) => {
    const array = values.otp;
    const concatenatedString = array.join("");
    console.log(typeof concatenatedString);
    form.resetFields();
    // Your logic
  };

  return (
    <div>
      <section>
        <Container>
          <div className="login-wrapper relative">
            <div className="login-header-logo absolute">
              <img src={fullLogo} />
            </div>
            <Form
              onFinish={handleFinish}
              form={form}
              className="verification-wrapper flex flex-col h-full"
            >
              <div className="login-botton-content-wrapper">
                <h1 className="text-white">
                  Enter <br /> Confirmation Code
                </h1>
                <span className="text-welded-iron secondary-font fw-600 mt-2 d-block">
                  Sent on {phoneNumber}
                </span>
              </div>
              <div className="verification-code-wrap mt-3 mt-md-7">
                <Form.Item label="" name="otp">
                  <InputOTP inputType="numeric" length={6} />
                </Form.Item>
                <h6 className="text-center mt-5 mb-4 p fw-500 text-shark-fin secondary-font">
                  Entered a incorrect number ?
                </h6>
                <div
                  className="change-number-label text-center cursor-pointer flex items-center justify-center ma-auto"
                  onClick={() => navigation("/")}
                >
                  <span className="text-center p fw-500 text-shark-fin secondary-font block">
                    Change Number
                  </span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <EWButton handelChange={onResentOtp} variant="primaryOpacity">
                  Resend OTP
                </EWButton>
                <EWButton variant="primary" className="mt-4" htmlType="submit">
                  Next
                </EWButton>
              </div>
            </Form>
          </div>
        </Container>
      </section>
    </div>
  );
};

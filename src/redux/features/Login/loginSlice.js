import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../../constant";
import { apiCall } from "../../../Services/commonServices";
import { message } from "antd";

const initialState = {
  isLoginLoading: false,
  secretKey: null,
  LoginData: null,
  phoneNumber: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginLoading: (state, action) => {
      state.isLoginLoading = action.payload;
    },
    setLoginData: (state, action) => {
      state.LoginData = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setSecretKey: (state, action) => {
      state.secretKey = action.payload;
    },
  },
});

export const { setLoginLoading, setLoginData, setSecretKey, setPhoneNumber } =
  loginSlice.actions;

export default loginSlice.reducer;

export const sendOtp = (value, onSuccessCallback) => (dispatch) => {
  dispatch(setLoginLoading(true));
  try {
    const onSuccess = (response) => {
      onSuccessCallback(response);
      console.log(response);
      // dispatch(setSecretKey(response.secret));
      dispatch(setLoginLoading(false));
    };
    const onFailure = (error) => {
      message.error("Something went wrong");
      dispatch(setLoginLoading(false));
    };

    apiCall("POST", apiUrl.SEND_OTP, value, onSuccess, onFailure);
  } catch (error) {
    message.error("Something went wrong");
    dispatch(setLoginLoading(false));
  }
};

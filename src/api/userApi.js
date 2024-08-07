import { userAxiosInstance } from "./axiosInstance";

export const userSignup = async (signupData) => {
  const data = await userAxiosInstance.post("/signup", signupData);
  return data;
};

export const otpVerification = async (otp, otpId, userId) => {
  const data = await userAxiosInstance.post("/otp", { otp, userId });
  return data;
};

export const resendOtp = async (userEmail) => {
  const data = await userAxiosInstance.post("/resendOtp", { userEmail });
  return data;
};

export const loginVerification = async (loginData) => {
  const data = await userAxiosInstance.post("/login", loginData);
  return data;
};

export const userForgetPassword = async (userEmail) => {
  const data = await userAxiosInstance.post("/forgetPassword", { userEmail });
  return data;
};

export const userResetPassword = async (id, email, password) => {
  const data = await userAxiosInstance.put(`/resetPassword/${id}/${email}`, {
    password,
  });
  return data;
};

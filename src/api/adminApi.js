import { adminAxiosInstance } from "./axiosInstance";


export const adminVerifyLogin = async (loginData) => {
    console.log(loginData,"kfjhfuw");
  const data = await adminAxiosInstance.post("/login", loginData);
  return data;
};

export const userList = async () => {
  const data = await adminAxiosInstance.get("/userList");
  return data;
};

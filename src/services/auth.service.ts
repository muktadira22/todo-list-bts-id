import axios, { AxiosResponse } from "axios";
import IUser from "../types/user.type";
import { IResponse } from "../types/http.type";
import { API_URL } from "../const";

export const register = ({username, email, password} : IUser) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

export const login = ({username, password} : IUser) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response: AxiosResponse<IResponse<{token:string}>>) => {
      if (response.data.data?.token) {
        localStorage.setItem("user", JSON.stringify({
            username,
            token: response.data.data.token,
        }));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

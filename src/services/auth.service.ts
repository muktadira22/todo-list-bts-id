import axios from "axios";
import IUser from "../types/user.type";

const API_URL = "http://94.74.86.174:8080/api/";

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
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

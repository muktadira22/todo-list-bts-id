import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../const";

export const getAll = () => {
  return axios.get(API_URL + "checklist", { headers: authHeader() });
};

export const save = (name:string) => {
  return axios.post(API_URL + "checklist", { name }, { headers: authHeader() });
}

export const deleteById = (id:string) => {
  return axios.delete(`${API_URL}checklist/${id}`, { headers: authHeader() });
}

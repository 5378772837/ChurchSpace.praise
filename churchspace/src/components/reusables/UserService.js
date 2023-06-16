import axios from "axios";

const API_URL = "http://localhost:3000/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserPage = () => {
  return axios.get(API_URL + "user");
};

const getPastorPage = () => {
  return axios.get(API_URL + "pastor");
};

const getAdminPage = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getUserPage,
  getPastorPage,
  getAdminPage
}

export default UserService;
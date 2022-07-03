import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";
class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
  getItBoard() {
    return axios.get(API_URL + "it", { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
  getSpvBoard() {
    return axios.get(API_URL + "spv", { headers: authHeader() });
  }
  getTellerBoard() {
    return axios.get(API_URL + "teller", { headers: authHeader() });
  }
  getCsBoard() {
    return axios.get(API_URL + "cs", { headers: authHeader() });
  }
}
export default new UserService();

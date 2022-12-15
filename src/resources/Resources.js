import axios from "axios";
import API_URL from "../utils/config";

export default class Resources {
  url;

  constructor(entryPoint) {
    this.url = `${API_URL}${entryPoint}`;
  }

  async getAll() {
    return await axios.get(`${this.url}`);
  }

  async getOne(param) {
    return await axios.get(`${this.url}/${param}`);
  }
}

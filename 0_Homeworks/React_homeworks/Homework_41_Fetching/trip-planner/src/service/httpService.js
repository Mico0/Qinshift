import axios from "axios";

const httpService = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export default httpService;

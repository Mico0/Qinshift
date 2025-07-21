import axios from "axios";

export const httpService = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

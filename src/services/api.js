import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-r8jx.onrender.com'
});
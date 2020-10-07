import axios from "axios";
const { REACT_APP_REST_ENDPOINT } = process.env as { [k: string]: string };

const rest = axios.create({
  baseURL: REACT_APP_REST_ENDPOINT,
  timeout: 1000,
  transformResponse: (data) => {
    return JSON.parse(data);
  },
});

export default rest;

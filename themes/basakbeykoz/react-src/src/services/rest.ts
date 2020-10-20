import axios from 'axios';

const { REACT_APP_REST_ENDPOINT } = process.env;

const rest = axios.create({
  baseURL: REACT_APP_REST_ENDPOINT,
  timeout: 1000,
  transformResponse: (data) => {
    return JSON.parse(data);
  },
});

export default rest;

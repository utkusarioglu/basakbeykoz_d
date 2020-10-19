import axios from 'axios';
import { Env } from '../common/@types-common';

const { REACT_APP_REST_ENDPOINT } = process.env as Env;

const rest = axios.create({
  baseURL: REACT_APP_REST_ENDPOINT,
  timeout: 1000,
  transformResponse: (data) => {
    return JSON.parse(data);
  },
});

export default rest;

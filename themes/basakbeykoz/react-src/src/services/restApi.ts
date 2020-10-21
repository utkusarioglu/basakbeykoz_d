import axios, { AxiosInstance } from 'axios';

const { REACT_APP_REST_ENDPOINT } = process.env;

// interface RestApi {
//   request: <T>(params: any) => Promise<AxiosResponse<T>>;
// }

class RestApi {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: REACT_APP_REST_ENDPOINT,
      timeout: 1000,
      transformResponse: (data) => {
        return JSON.parse(data);
      },
    });
  }
  request<T>(requestParams: any) {
    return this.axiosInstance.request<T>(requestParams);
  }
}

export default new RestApi();

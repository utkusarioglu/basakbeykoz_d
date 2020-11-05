import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../../config';

const { REST_ENDPOINT, REST_TIMEOUT } = config;

class RestApi {
  /**
   * The axios instance used by the app
   */
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: REST_ENDPOINT,
      timeout: parseInt(REST_TIMEOUT),
      transformResponse: this.transformResponse,
    });
  }

  /**
   * Makes the translations required by the rest of the app to make sense
   * of the data received by the endpoint.
   * !Important
   * This method is meant to be hooked to
   * {@link axios.transformResponse | axios.transformResponse} property during
   * creation of the axios instance
   * @param data Raw data fetched by {@link axios}
   * @returns data param of {@link axios.AxiosResponse | AxiosResponse} in a
   * format that is understandable by the features
   */
  transformResponse = (data: AxiosResponse['data']) => JSON.parse(data);
  /**
   * Wrapper for {@link axios | axios}'s request method
   * @param requestParams {@link axios.AxiosRequestConfig} passed down to the
   * {@link axios.request | axios.request} method.
   * @returns A promise that resolves to {@link axios.AxiosResponse} after
   * passing through {@link transformResponse | transformResponse} method.
   */
  request<T>(requestParams: AxiosRequestConfig) {
    return this.axiosInstance.request<T>(requestParams);
  }

  /**
   * Wraps the post method of axios
   * @param url - url that is going to be concatenated to the rest endpoint url
   * @param formData - The data that is intended to be sent
   * @param options - Axios request options
   */
  post<T>(url: string, formData: any, options: AxiosRequestConfig) {
    return this.axiosInstance.post<T>(url, formData, options);
  }
}

export default new RestApi();

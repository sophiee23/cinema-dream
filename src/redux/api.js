import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      }
  });
  
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request start", API_KEY)
    return config;
  }, function (error) {
    // Do something with request error
    console.log("request error", error)
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response get", response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error", error)
    return Promise.reject(error);
  });

export default api;
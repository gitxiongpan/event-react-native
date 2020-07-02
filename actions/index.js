import axios from 'axios';

const onRequest = (req) => req;

const onRequestError = (err) => Promise.reject(err);

const onResponse = (res) => Promise.resolve(res);

const onResponseError = (err) => Promise.reject(err);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const http = axios.create({
  baseURL: 'http://192.168.0.112:4000',
  timeout: 30000,
});

http.interceptors.request.use(onRequest, onRequestError);
http.interceptors.response.use(onResponse, onResponseError);

export default http;

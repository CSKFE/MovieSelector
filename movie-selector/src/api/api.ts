import axios from "axios";

export const defaultInstance = axios.create({
  baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
  timeout: 3000,
  responseType: 'json',
});
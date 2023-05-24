import axios, { AxiosInstance, AxiosError, AxiosHeaders, AxiosRequestConfig, isAxiosError } from 'axios';

const DEEPLOOK_API_URL = 'https://deeplookingproject.com/api/';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const client: AxiosInstance = axios.create({
    baseURL: DEEPLOOK_API_URL,
    withCredentials: true, // refresh_token cookie를 주고받기 위함
});

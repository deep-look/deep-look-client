import axios from 'axios';
import { atom, selector, useRecoilState } from 'recoil';
import { getCookie } from '../../utils/cookie';

export const userIdState = atom<number>({
  key: 'userIdState',
  default: 0,
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: false,
});

export const accessTokenState = atom<string>({
  key: 'accessToken',
  default: '',
});

export const successState = atom<boolean>({
  key: 'success',
  default: false,
});

export const dataState = atom<any>({
  key: 'data',
  default: '',
});

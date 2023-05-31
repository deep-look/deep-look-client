import { client } from './client';
import { getCookie } from '@deeplook/utils/cookie';

const accessToken = getCookie();

export const authAPI = {
  KAKAO_VALIDATION: async (userId: number): Promise<any> => {
    const response = await client.post('/token/issue', {
      userId: userId,
    });

    return response.data;
  },

  TEST: async (userId: number, accessToken: string): Promise<any> => {
    const response = await client.get('/token/test', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },

  COMMENT_LIST: async (): Promise<any> => {
    const response = await client.get('/comment', {
      headers: {
        JWT: `${accessToken}`,
      },
    });
    return response.data;
  },

  COMMENT_CREATE: async (value: string): Promise<any> => {
    const response = await client.post('/comment', {
      headers: {
        JWT: `${accessToken}`,
      },
      body: value,
    });
    return response.data;
  },
};

export default authAPI;

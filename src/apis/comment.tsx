import { client } from './client';
import { getCookie } from '@deeplook/utils/cookie';

const accessToken = getCookie();

export const commentAPI = {
  COMMENT_LIST: async (): Promise<any> => {
    const response = await client.get('/comment', {
      headers: {
        JWT: `${accessToken}`,
      },
    });
    return response.data;
  },

  COMMENT_CREATE: async (value: string): Promise<any> => {
    const response = await client.post(
      '/comment',
      {
        body: value,
      },
      {
        headers: {
          JWT: `${accessToken}`,
        },
      }
    );
    return response.data;
  },
};

export default commentAPI;

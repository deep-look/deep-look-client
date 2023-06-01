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
    TOKEN_VALIDATION: async (accessToken: string): Promise<any> => {
        const response = await client.get('/token/validate', {
            headers: {
                JWT: `${accessToken}`,
            },
        });

        return response.data;
    },
};

export default authAPI;

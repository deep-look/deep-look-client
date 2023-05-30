import { client } from './client';

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
};

export default authAPI;

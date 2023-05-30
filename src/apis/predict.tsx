import { client } from './client';

export const predictAPI = {
    POST_PREDICT: async (image: string, accessToken: string): Promise<any> => {
        const response = await client.post(`/predict/${image}`, {
            headers: {
                JWT: `${accessToken}`,
            },
        });

        return response.data;
    },
    GET_PREDICT: async (userId: number, accessToken: string): Promise<any> => {
        const response = await client.get('/predict', {
            headers: {
                JWT: `${accessToken}`,
            },
        });
        return response.data;
    },
};

export default predictAPI;

import { client } from './client';

export const predictAPI = {
    POST_PREDICT: async (image: string): Promise<any> => {
        const response = await client.post('/predict', {
            image: image,
        });

        return response.data;
    },
    GET_PREDICT: async (userId: number, accessToken: string): Promise<any> => {
        const response = await client.get('/predict', {
            headers: {
                Authorization: `JWT ${accessToken}`,
            },
        });
        return response.data;
    },
};

export default predictAPI;

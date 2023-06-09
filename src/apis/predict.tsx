import { client } from './client';

export const predictAPI = {
  POST_PREDICT: async (image: string, accessToken: string): Promise<any> => {
    // console.log(image);

    const base64Data = image.split(',')[1];
    const formData = new FormData();
    formData.append('image', base64Data);
    try {
      const response = await client.post(`/predict`, formData, {
        headers: {
          JWT: `${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      //   console.log(response);
      return { isSuccess: response.data.isSuccess, data: response.data };
    } catch (err: any) {
      //   console.log(err.response.data);
      return { isSuccess: err.response.data.isSuccess, data: err.response.data.message };
    }
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

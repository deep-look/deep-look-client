import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { getCookie } from '@deeplook/utils/cookie';

import predictAPI from '@deeplook/apis/predict';
import { userIdState } from '@deeplook/store/Auth/userState';

const usePredictList = () => {
  const userId = useRecoilValue(userIdState);
  const accessToken = getCookie();

  const { data } = useQuery<any>(
    ['predicts'],
    () => predictAPI.GET_PREDICT(userId, accessToken),
    {
      onError: () => {
        alert('댓글 목록 확인이 어려워요. 다시 시도해 주세요!');
      },
    }
  );
  return data;
};

export default usePredictList;

import { useQuery } from '@tanstack/react-query';

import authAPI from '@deeplook/apis/auth';

const useCommentList = () => {
  const { data } = useQuery<any>(['comments'], authAPI.COMMENT_LIST, {
    onError: () => {
      console.error('댓글 목록 확인이 어려워요. 다시 시도해 주세요!');
    },
  });
  return data;
};

export default useCommentList;

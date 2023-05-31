import { useQuery } from '@tanstack/react-query';

import commentAPI from '@deeplook/apis/comment';

const useCommentList = () => {
  const { data } = useQuery<any>(['comments'], commentAPI.COMMENT_LIST, {
    onError: () => {
      console.error('댓글 목록 확인이 어려워요. 다시 시도해 주세요!');
    },
  });
  return data;
};

export default useCommentList;

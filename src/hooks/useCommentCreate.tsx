import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAPI from '../apis/auth';

export const useCommentCreate = () => {
  const queryClient = useQueryClient();

  const createCommentMutation = useMutation(authAPI.COMMENT_CREATE, {
    onSuccess: async (data: any) => {
      alert('댓글 작성에 성공했어요!');
      queryClient.invalidateQueries(['comments']);
    },
    onError: (error: any) => {
      alert('댓글 작성이 어려워요. 다시 시도해 주세요!');
    },
  });

  return {
    createCommentMutation,
  };
};

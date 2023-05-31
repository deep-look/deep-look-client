import { useMutation, useQueryClient } from '@tanstack/react-query';
import commentAPI from '@deeplook/apis/comment';

export const useCommentCreate = () => {
  const queryClient = useQueryClient();

  const createCommentMutation = useMutation(commentAPI.COMMENT_CREATE, {
    onSuccess: async (data: any) => {
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

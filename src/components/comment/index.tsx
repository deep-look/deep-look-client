import styled from '@emotion/styled';

import useCommentList from '@deeplook/hooks/useCommentList';
import { useCommentCreate } from '@deeplook/hooks/useCommentCreate';
import { useInput } from '@deeplook/hooks/useInput';

import { CommentCard } from '@deeplook/components/common/card/comment';
import { Flex, Text } from '../Common';
import { Input } from '../common/Input';
import { AirplaneIcon } from '../icons';

const Comment = () => {
  const comments = useCommentList();
  const { createCommentMutation } = useCommentCreate();
  const { value, handleChangeInput, reset } = useInput('');

  return (
    <Flex direction="column" justify="space-around" gap={48}>
      <Flex direction="column" gap={48}>
        <Text typo="Heading" color="Yellow2">
          댓글 달기
        </Text>
        <InputWrapper>
          <Input
            height={44}
            placeholder="테스트는 어떠셨나요?"
            value={value}
            onChange={handleChangeInput}
          />
          <IconWraper
            onClick={() => {
              createCommentMutation.mutate(value);
              reset();
            }}
          >
            <AirplaneIcon />
          </IconWraper>
        </InputWrapper>
      </Flex>
      <Flex direction="column" justify="space-around" gap={24}>
        <CommentCard
          name="닉네임"
          comment="우와 신기해요 어쩌구저쩌ㅁㄴ아럼 ㅏㅊㄹ날먼알ㄹㄴㅇㄹㅁㄴ아"
        />
        <CommentCard name="닉네임" comment="안녕하세요" />
        <CommentCard
          name="닉네임"
          comment="우와 신기해요 어쩌구저쩌ㅁㄴ아럼 ㅏㅊㄹ날먼알ㄹㄴㅇㄹㅁㄴ아"
        />
      </Flex>
    </Flex>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWraper = styled.div`
  position: absolute;
  top: 5px;
  right: 16px;
`;

export default Comment;

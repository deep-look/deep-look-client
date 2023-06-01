import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { userIdState } from '@deeplook/store/Auth/userState';
import { useQueryClient } from '@tanstack/react-query';

import { theme } from '@deeplook/styles/theme';
import { Navigation } from '@deeplook/components/common/navigation';
import { Flex, Text } from '../Common';
import { Button } from '../common/Button';
import Comment from '../comment';

const Result = () => {
  useEffect(() => {
    document.body.style.backgroundColor = `${theme.palette.Gray3}`;
    return () => {
      document.body.style.backgroundColor = 'transparent';
    };
  }, []);

  const router = useRouter();

  const queryClient = useQueryClient();
  const userId = useRecoilValue(userIdState);
  const predicts = queryClient.getQueryData(['test', userId]);

  return (
    <>
      <Navigation title="테스트 결과" />
      <Content bg="dark">
        <StyledFlex direction="column" justify="space-around" gap={72}>
          <Flex direction="column">
            <Text typo="Heading" color="Yellow2">
              당신과 닮은 유명인은
            </Text>
            <Text typo="Body2" color="White"></Text>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
          </Flex>
          <Flex direction="column">
            <Text typo="Heading" color="Yellow2">
              당신의 예상 MBTI는
            </Text>
            <Text typo="Body2" color="White">
              XXXX
            </Text>
          </Flex>
          <Button
            fullWidth
            text="테스트 다시 하기"
            varient="yellow"
            color="Gray3"
            onClick={() => router.push('/test')}
          />
        </StyledFlex>
        <Line />
        <Flex direction="column" justify="space-around" gap={48}>
          <Comment />
        </Flex>
      </Content>
    </>
  );
};

const Content = styled.div<{ bg: string }>`
  width: 100%;
  max-width: 600px;
  padding: 160px 32px;

  background: ${({ bg }) =>
    bg == 'dark'
      ? ({ theme }) => theme.palette.Gray3
      : ({ theme }) => theme.palette.Yellow2};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const ImgWrapper = styled.div`
  width: 240px;
  height: 240px;

  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.palette.Gray2};
  object-fit: cover;
`;

const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.Yellow2};
  border: 0;
`;

const StyledFlex = styled(Flex)`
  min-height: 640px;
`;

export default Result;

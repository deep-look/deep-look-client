import Head from 'next/head';
import styled from '@emotion/styled';
import { Navigation } from '@deeplook/components/common/navigation';
import { CommentCard } from '@deeplook/components/common/card/comment';
import { Flex, Text } from '../Common';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { AirplaneIcon } from '../icons';

const Result = () => {
  return (
    <>
      <Head>
        <title>DEEPLOOK</title>
      </Head>
      <Navigation title="테스트 결과" />
      <Content bg="dark">
        <StyledFlex direction="column" justify="space-around" gap={68}>
          <Flex direction="column">
            <Text typo="Heading" color="Yellow2">
              당신과 닮은 유명인은
            </Text>
            <Text typo="Body2" color="White">
              XXX
            </Text>
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
          />
        </StyledFlex>
        <Line />
        <Flex direction="column" justify="space-around" gap={48}>
          <Flex direction="column" justify="space-around" gap={48}>
            <Flex direction="column" gap={48}>
              <Text typo="Heading" color="Yellow2">
                댓글 달기
              </Text>
              <InputWrapper>
                <Input height={44} placeholder="테스트는 어떠셨나요?" />
                <IconWraper>
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

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWraper = styled.div`
  position: absolute;
  top: 5px;
  right: 16px;
`;

const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.Yellow2};
  border: 0;
`;

const StyledFlex = styled(Flex)`
  min-height: 800px;
`;

export default Result;

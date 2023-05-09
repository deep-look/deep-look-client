import Head from 'next/head';
import styled from '@emotion/styled';
import { Navigation } from '@deeplook/components/common/navigation';
import { CommentCard } from '@deeplook/components/common/card/comment';
import { Flex, Text } from '../Common';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

const Result = () => {
  return (
    <>
      <Head>
        <title>DEEPLOOK</title>
      </Head>
      <Navigation title="테스트 결과" />
      <Content bg="dark">
        <Flex direction="column" justify="space-around" gap={72}>
          <Flex direction="column">
            <Text typo="Heading" color="Yellow">
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
            <Text typo="Heading" color="Yellow">
              당신의 예상 MBTI는
            </Text>
            <Text typo="Body2" color="White">
              XXXX
            </Text>
          </Flex>
          <Button text="테스트 다시 하기" varient="yellow" color="Gray3" />
        </Flex>
      </Content>
      <Content bg="dark">
        <Flex direction="column" justify="space-around" gap={48}>
          <Flex direction="column" gap={48}>
            <Text typo="Heading" color="Yellow">
              댓글 달기
            </Text>
            <Input width={340} height={44} placeholder="테스트는 어떠셨나요?" />
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
      </Content>
    </>
  );
};

const Content = styled.div<{ bg: string }>`
  width: 100%;
  padding: 152px 0;

  background: ${({ bg }) =>
    bg == 'dark'
      ? ({ theme }) => theme.palette.Black
      : ({ theme }) => theme.palette.Yellow2};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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

export default Result;

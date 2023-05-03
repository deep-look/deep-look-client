import Head from 'next/head';
import { Navigation } from '@deeplook/components/common/navigation';
import { CommentCard } from '@deeplook/components/common/card/comment';
import styled from '@emotion/styled';
import { MainCard } from '@deeplook/components/common/card/main';
import { Button } from '@deeplook/components/common/Button';
import { DownIcon, LogoIcon, LogoImage } from '@deeplook/components/icons';
import { Space, Flex } from '@deeplook/components/Common';
import { theme } from '@deeplook/styles/theme';

export default function Home() {
  return (
    <>
      <Head>
        <title>DEEPLOOK</title>
      </Head>
      <Content bg="dark">
        <Logo>
          <div style={{ color: `${theme.palette.White}` }}>
            <LogoIcon />
          </div>
          <LogoImage />
        </Logo>
        <DownIcon />
      </Content>
      <Content bg="yellow">
        <Flex gap={16} direction="column">
          <MainCard
            title="나랑 닮은 연예인이 누굴까?"
            description="설명설명어쩌구"
          />
          <MainCard
            title="남이 보는 내 MBTI가 궁금해!"
            description="설명설명어쩌구"
          />
          <MainCard
            title="나는 누구와 가장 닮았을까?"
            description="설명설명어쩌구"
          />
          <MainCard
            title="MBTI가 정확할지 궁금해!"
            description="설명설명어쩌구"
          />
        </Flex>
        <Button text="테스트 하러 가기" color="White" varient="dark"></Button>
        <Space height={60} />
      </Content>
    </>
  );
}

const Content = styled.div<{ bg: string }>`
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
  background: ${({ bg }) =>
    bg == 'dark'
      ? ({ theme }) => theme.palette.Black
      : ({ theme }) => theme.palette.Yellow2};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Img = styled.img``;

import Head from 'next/head';
import { Navigation } from '@deeplook/components/common/navigation';
import { CommentCard } from '@deeplook/components/common/card/comment';
import styled from '@emotion/styled';
import { MainCard } from '@deeplook/components/common/card/main';
import { Button } from '@deeplook/components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>DEEPLOOK</title>
      </Head>
      <Container>
        <Navigation title="로그인" />
        <CommentCard
          name="닉네임"
          comment="우와 신기해요 어쩌구저쩌ㅁㄴ아럼 ㅏㅊㄹ날먼알ㄹㄴㅇㄹㅁㄴ아"
        />
        <MainCard title='나랑 닮은 연예인이 누굴까?' description='설명설명어쩌구'/>
        <Button text='테스트 하러 가기' color='White' varient='dark'></Button>
      
        랜딩
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  background: ${({ theme }) => theme.palette.Black};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

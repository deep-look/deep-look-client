import Head from 'next/head';
import { Navigation } from '@deeplook/components/common/navigation';
import { CommentCard } from '@deeplook/components/common/card/comment';
import styled from '@emotion/styled';

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
        랜딩
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.Black};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

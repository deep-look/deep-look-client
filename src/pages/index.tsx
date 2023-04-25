import Head from 'next/head';
import { Navigation } from '@deeplook/components/common/navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>DEEPLOOK</title>
      </Head>
      <div>
        <Navigation title="로그인" />
        랜딩
      </div>
    </>
  );
}

import type { AppProps } from 'next/app';
import { Layout } from '../components/common/layout';
import { Global } from '@emotion/react';
import reset from '@deeplook/styles/reset';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@deeplook/styles/theme';
import dynamic from 'next/dynamic';

interface CurosrProps {
  color: string;
}

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
      <AnimatedCursor />
    </>
  );
}

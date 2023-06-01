import type { AppProps } from 'next/app';
import { useState } from 'react';

import { Layout } from '../components/common/layout';
import { Global } from '@emotion/react';
import reset from '@deeplook/styles/reset';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@deeplook/styles/theme';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { useAutoLogin } from '@deeplook/hooks/useAutoLogin';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Global styles={reset} />
            <Layout>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </Layout>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

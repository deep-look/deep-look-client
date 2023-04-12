import type { AppProps } from 'next/app'
import { Layout } from '../components/common/layout'
import { Global } from '@emotion/react'
import reset from '@deeplook/styles/reset'

export default function App({ Component, pageProps }: AppProps) {
  return (<><Global styles={reset}/><Layout><Component {...pageProps} /></Layout></>)
} 

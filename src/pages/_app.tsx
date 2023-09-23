import Head from 'next/head';

import type { AppPropsWithLayout } from '@layouts';
import { GlobalStyles, theme } from '@styles';
import { ThemeProvider } from 'styled-components';

import localFont from 'next/font/local';

const pretendard = localFont({ src: '../../public/fonts/PretendardVariable.woff2' });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Link Your Link</title>
        <meta name="description" content="link your link" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main className={pretendard.className}>
          <GlobalStyles />
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ThemeProvider>
    </>
  );
}

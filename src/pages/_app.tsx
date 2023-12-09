import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider, ToastProvider } from '@stores';

import { AppPropsWithLayout, DefaultLayout } from '@layouts';
import { GlobalStyles, theme } from '@styles';
import { ThemeProvider } from 'styled-components';

import localFont from 'next/font/local';

const pretendard = localFont({ src: '../../public/fonts/PretendardVariable.woff2' });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
  );
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
          <ModalProvider>
            <ToastProvider>
              <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                  <DefaultLayout pageProps={pageProps}>
                    {getLayout(<Component {...pageProps} />)}
                  </DefaultLayout>
                </QueryClientProvider>
              </RecoilRoot>
            </ToastProvider>
          </ModalProvider>
        </main>
      </ThemeProvider>
    </>
  );
}

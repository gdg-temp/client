import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider, ToastProvider } from '@stores';

import { AppPropsWithLayout, DefaultLayout } from '@layouts';
import { GlobalStyles, theme } from '@styles';
import { ThemeProvider } from 'styled-components';
import MaintenaceTemplate from 'src/templates/maintenance/MaintenanceTemplate';

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
  const status = process.env.NEXT_PUBLIC_STATUS;

  return (
    <>
      <Head>
        <title>Link Your Link</title>
        <meta name="description" content="link your link" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <GlobalStyles />
          <ModalProvider>
            <ToastProvider>
              <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                  <DefaultLayout pageProps={pageProps}>
                    {status === 'maintenance' ? (
                      <MaintenaceTemplate />
                    ) : (
                      getLayout(<Component {...pageProps} />)
                    )}
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

import Head from 'next/head';

import type { AppPropsWithLayout } from '@layouts';
import { ModalProvider } from '@stores';

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
      <ModalProvider>{getLayout(<Component {...pageProps} />)}</ModalProvider>
    </>
  );
}

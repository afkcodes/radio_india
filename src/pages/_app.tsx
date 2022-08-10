import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import Player from '../components/Player';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Player />
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;

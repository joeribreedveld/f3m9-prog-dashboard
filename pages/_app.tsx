// Imports
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

// Functions
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Exports
export default App;

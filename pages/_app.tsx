// Imports
import "../styles/globals.css";
import type { AppProps } from "next/app";

// Functions
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Exports
export default App;

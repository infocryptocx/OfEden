import "../styles/globals.css";
import { CryptoWorldProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <CryptoWorldProvider>
      <Component {...pageProps} />
    </CryptoWorldProvider>
  );
}

export default MyApp;
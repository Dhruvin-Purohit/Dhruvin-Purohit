import type { AppProps } from "next/app";
import Frame from "../components/Frame";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  );
}

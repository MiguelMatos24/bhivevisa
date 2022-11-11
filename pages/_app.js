import { useEffect } from "react";
import "../styles/style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>Bhive Visa</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Investments Funds and Golden Visa" />
  </Head>;
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

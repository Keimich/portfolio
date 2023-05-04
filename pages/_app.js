import React from "react";
import Head from "next/head";
import "normalize.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}

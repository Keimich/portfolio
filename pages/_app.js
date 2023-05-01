import React from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

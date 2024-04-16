import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../lib/store";
import { Navigation } from "../components/common/Navigation";
import { Footer } from "../components/common/Footer";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Evermos</title>
        <meta name="description" content="E-Commerce Website." />
        <meta name="author" content="@gagaadilesmana" />
        <meta property="og:title" content="Evermos" key="ogtitle" />+{" "}
        <meta property="og:description" content="Component Website." key="ogdesc" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div>
        <Provider store={store}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </div>
    </React.Fragment>
  );
}

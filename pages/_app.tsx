import "react-datepicker/dist/react-datepicker.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// own css files here
import "@/styles/styles.scss";
import "react-phone-input-2/lib/style.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <NextNProgress
        options={{ easing: "ease", speed: 500 }}
        showOnShallow={true}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);

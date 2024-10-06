import { AppProps } from "next/app";
import { useEffect } from "react";
import { NextComponentWithLayout } from "@/types/NextComponentWithLayout";

import "@/assets/globals.css";
import "@/assets/scss/run.scss";
import "@/assets/rtl.css";
import "@/assets/js/app";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const isRtl = true;

    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, []);

  const ComponentWithLayout = Component as NextComponentWithLayout;

  const getLayout =
    ComponentWithLayout.getLayout || ((page: JSX.Element) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;

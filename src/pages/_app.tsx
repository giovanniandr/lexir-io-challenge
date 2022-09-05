import type { AppProps } from "next/app";

import SideNavBar from "../components/SideNavBar.js";
import "../styles/globals.css";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <main>
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
      <SideNavBar />
      <Component {...pageProps} />
    </div>
    </main>
  );
}

export default MyApp;
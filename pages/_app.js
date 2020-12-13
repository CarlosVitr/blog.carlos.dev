import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import * as gtag from "@utils/gtag";

import "@assets/main.css";

import "fontsource-ibm-plex-mono";
import "fontsource-ibm-plex-mono/500.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

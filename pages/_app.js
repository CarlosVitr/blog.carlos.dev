import { ThemeProvider } from "next-themes";

import "@assets/main.css";

import "fontsource-ibm-plex-mono";
import "fontsource-ibm-plex-mono/500.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

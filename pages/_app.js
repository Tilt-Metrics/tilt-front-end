import "minireset.css";
import { ThemeProvider } from "emotion-theming";
import theme from "../lib/theme";

export default function({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import "minireset.css";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import theme from "../lib/theme";

export default function({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Work+Sans:300");
          @import url("https://rsms.me/inter/inter.css");
          html {
            font-family: "Inter", sans-serif;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

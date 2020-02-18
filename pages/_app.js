import "minireset.css";
import { useRouter } from "next/router";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { motion, AnimatePresence } from "framer-motion";

import theme from "../lib/theme";
import Footer from "../components/Footer";

export default function({ Component, pageProps }) {
  const router = useRouter();

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
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3
            }}
          >
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Headline from "../UI/Headline";

function Hero(props) {
  return (
    <div
      id="hero"
      css={theme => ({
        backgroundColor: theme.colors.brightBlue,
        backgroundImage: "url('/img/hero-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "bottom center",
        marginBottom: theme.spacing[3],
        height: "100vh",
        width: "100%"
      })}
    >
      <div
        css={theme => ({
          alignItems: "center",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: theme.maxWidths[1],
          textAlign: "center"
        })}
      >
        <Headline display>{props.headline}</Headline>
        <Headline as="h2" size={1}>
          {props.subheadline}
        </Headline>
      </div>
    </div>
  );
}

export default Hero;

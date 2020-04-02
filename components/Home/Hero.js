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
        <Headline displayFont={true}>{props.headline}</Headline>
        <Headline as="h2" size={0}>
          {props.subheadline}
        </Headline>
      </div>
      <img
        css={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)"
        }}
        src="/img/hero-fg.png"
      />
    </div>
  );
}

export default Hero;

/** @jsx jsx */
import { jsx } from "@emotion/core";

function Hero(props) {
  return (
    <div
      css={theme => ({
        backgroundColor: theme.colors.brightBlue,
        backgroundImage: "url('/img/hero-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        fontFamily: theme.fonts.body,
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
          maxWidth: theme.maxWidths[0],
          textAlign: "center"
        })}
      >
        <h1
          css={theme => ({
            fontSize: theme.headingSizes[4],
            marginBottom: theme.spacing[1]
          })}
        >
          {props.headline}
        </h1>
        <h2
          css={theme => ({
            fontSize: theme.headingSizes[2]
          })}
        >
          {props.subheadline}
        </h2>
      </div>
    </div>
  );
}

export default Hero;

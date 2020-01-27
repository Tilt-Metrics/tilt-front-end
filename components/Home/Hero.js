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
        <h1
          css={theme => ({
            fontSize: theme.headingSizes[3],
            marginBottom: theme.spacing[1]
          })}
        >
          {props.headline}
        </h1>
        <h2
          css={theme => ({
            fontSize: theme.headingSizes[1]
          })}
        >
          {props.subheadline}
        </h2>
      </div>
    </div>
  );
}

export default Hero;

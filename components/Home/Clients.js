/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";

function Clients(props) {
  return (
    <div
      css={theme => ({
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        fontFamily: theme.fonts.body,
        height: "100%",
        justifyContent: "center",
        margin: "0 auto",
        marginBottom: theme.spacing[3],
        maxWidth: theme.maxWidths[1],
        textAlign: "center"
      })}
    >
      <span
        css={theme => ({
          color: theme.colors.brightBlue,
          display: "block",
          marginBottom: theme.spacing[0],
          textTransform: "uppercase",
          fontWeight: "bold"
        })}
      >
        {props.label}
      </span>
      <h2
        css={theme => ({
          fontSize: theme.headingSizes[1],
          marginBottom: theme.spacing[2],
          maxWidth: theme.maxWidths[0]
        })}
      >
        {props.headline}
      </h2>
      <div
        css={mq({
          display: "grid",
          gridTemplateColumns: ["repeat(2, 1fr)", "repeat(6, 1fr)"],
          gridGap: ["15%", "5%"],
          gridRowGap: ["30%", "auto"],
          gridAutoRows: "min-content",
          gridAutoFlow: "row"
        })}
      >
        {props.logos.map(l => (
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src={l.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;

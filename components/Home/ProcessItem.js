/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";

function ProcessItem(props) {
  return (
    <div
      css={mq({
        display: "grid",
        gridTemplateColumns: ["repeat(1, 1fr)", "1fr 1fr"],
        maxWidth: 960,
        gridGap: "40px",
        margin: "0 auto",
        minHeight: "60vh",
        padding: "0 30px"
      })}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          css={{ width: "100%", padding: "70px 0" }}
          src={props.item.image.url}
        />
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h3
          css={theme => ({
            color: theme.colors.brightBlue,
            fontSize: theme.headingSizes[1],
            marginBottom: theme.spacing[0],
            maxWidth: theme.maxWidths[0]
          })}
        >
          {props.item.headline}
        </h3>
        <p
          css={theme => ({
            color: theme.colors.concrete,
            fontSize: theme.copySizes[1],
            marginBottom: theme.spacing[2],
            lineHeight: theme.lineHeights[1]
          })}
        >
          {props.item.copy}
        </p>
      </div>
    </div>
  );
}

export default ProcessItem;

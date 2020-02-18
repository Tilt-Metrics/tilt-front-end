/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";
import Wrapper from "../UI/Wrapper";

function Clients(props) {
  return (
    <Wrapper>
      <div
        css={theme => ({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontFamily: theme.fonts.body,
          height: "100%",
          justifyContent: "center",
          paddingTop: theme.spacing[3],
          paddingBottom: theme.spacing[3],
          textAlign: "center"
        })}
      >
        <span
          css={theme => ({
            color: theme.colors.brightBlue,
            display: "block",
            marginBottom: theme.spacing[2],
            textTransform: "uppercase",
            fontWeight: "bold"
          })}
        >
          {props.label}
        </span>
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
    </Wrapper>
  );
}

export default Clients;

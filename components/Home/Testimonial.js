/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";

function Testimonial(props) {
  return (
    <div
      css={theme => ({
        alignItems: "center",
        justifyContent: "center",
        fontFamily: theme.fonts.body,
        display: "flex",
        margin: "0 auto",
        maxWidth: theme.maxWidths[1],
        marginBottom: theme.spacing[3]
      })}
    >
      <div
        css={theme =>
          mq({
            backgroundColor: theme.colors.slate,
            maxWidth: theme.maxWidths[0],
            height: "100%",
            width: "100%",
            padding: ["30px", "70px 108px"]
          })
        }
      >
        <h3
          css={theme => ({
            fontSize: theme.headingSizes[0],
            textAlign: "center",
            marginBottom: 40
          })}
        >
          {props.quote}
        </h3>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(39, 40, 61, 0.1)",
            marginBottom: 48
          }}
        >
          <img
            css={{ width: 56, height: 56, marginRight: "16px" }}
            src={props.image}
          />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p>{props.author}</p>
            <p>{props.title}</p>
          </div>
        </div>
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
            gridGap: ["15%", "5%"],
            gridRowGap: ["30%", "auto"],
            gridAutoRows: "min-content",
            gridAutoFlow: "row"
          })}
        >
          {props.stats.map((s, idx) => (
            <div css={{ textAlign: "center" }}>
              <h4
                css={theme => ({
                  color: theme.colors.brightBlue,
                  fontSize: theme.headingSizes[3]
                })}
              >
                {s.headline}
              </h4>
              <p>{s.subheadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

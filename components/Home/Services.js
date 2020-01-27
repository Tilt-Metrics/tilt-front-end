/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";

function Services(props) {
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
        maxWidth: theme.maxWidths[1]
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
          marginBottom: theme.spacing[1],
          maxWidth: theme.maxWidths[0],
          textAlign: "center"
        })}
      >
        {props.headline}
      </h2>
      <p
        css={theme => ({
          fontSize: theme.headingSizes[0],
          marginBottom: theme.spacing[2],
          maxWidth: theme.maxWidths[0],
          textAlign: "center"
        })}
      >
        {props.subheadline}
      </p>
      <div>
        {props.servicesGroup.map((s, idx) => (
          <div
            css={theme =>
              mq({
                display: "grid",
                gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
                marginBottom: theme.spacing[3],
                gridRowGap: ["10%", "auto"],
                gridAutoRows: "min-content",
                gridAutoFlow: "row"
              })
            }
          >
            <div>
              <img src={s.image.url} />
            </div>
            <div css={mq({ padding: ["0px 30px", "0px 100px"] })}>
              <span
                css={theme => ({
                  color: theme.colors.brightBlue,
                  display: "block",
                  marginBottom: theme.spacing[0],
                  textTransform: "uppercase",
                  fontWeight: "bold"
                })}
              >{`0${idx + 1}`}</span>
              <h4
                css={theme => ({
                  color: theme.colors.brightBlue,
                  fontSize: theme.headingSizes[2],
                  marginBottom: theme.spacing[0],
                  maxWidth: theme.maxWidths[0]
                })}
              >
                {s.title}
              </h4>
              <p
                css={theme => ({
                  color: theme.colors.concrete,
                  fontSize: theme.copySizes[1],
                  lineHeight: theme.lineHeights[1]
                })}
              >
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

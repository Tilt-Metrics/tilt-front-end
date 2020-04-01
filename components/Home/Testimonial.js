/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";
import Wrapper from "../UI/Wrapper";

function Testimonial(props) {
  return (
    <div css={{ backgroundColor: "white" }}>
      <Wrapper>
        <div
          css={theme => ({
            backgroundImage: 'url("/img/texture.png")',
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: theme.fonts.body,
            display: "flex",
            position: "relative",
            height: "100%",
            width: "100%",
            marginBottom: theme.spacing[3],
            paddingTop: theme.spacing[3]
          })}
        >
          <div
            css={theme =>
              mq({
                backgroundColor: theme.colors.slate,
                maxWidth: theme.maxWidths[0],
                height: "100%",
                position: "relative",
                width: "100%",
                padding: ["30px", "70px 108px"],
                zIndex: 10
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
                <p css={{ fontWeight: "bold" }}>{props.author}</p>
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
                gridAutoFlow: "row",
                height: "100%"
              })}
            >
              {props.stats.map((s, idx) => (
                <div key={idx} css={{ textAlign: "center" }}>
                  <h4
                    css={theme => ({
                      fontFamily: theme.fonts.display,
                      color: theme.colors.brightBlue,
                      fontSize: theme.headingSizes[3],
                      marginBottom: theme.spacing[0]
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
      </Wrapper>
    </div>
  );
}

export default Testimonial;

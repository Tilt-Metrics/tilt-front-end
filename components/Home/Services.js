/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../../lib/utils";
import Wrapper from "../UI/Wrapper";
import Headline from "../UI/Headline";
import Text from "../UI/Text";

function Services(props) {
  return (
    <Wrapper id="services" css={theme => ({ marginBottom: theme.spacing[2] })}>
      <Text
        size={0}
        spacing={0}
        color="brightBlue"
        uppercase
        bold
        css={{ textAlign: "center" }}
      >
        {props.label}
      </Text>
      <Headline
        size={1}
        as="h2"
        spacing={0}
        css={{
          textAlign: "center"
        }}
      >
        {props.headline}
      </Headline>
      <Text
        spacing={2}
        css={{
          textAlign: "center"
        }}
      >
        {props.subheadline}
      </Text>
      <div
        css={mq({
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
          gridGap: 80
        })}
      >
        {props.servicesGroup.map((s, idx) => (
          <div key={idx}>
            <Headline
              size={0}
              spacing={0}
              css={theme => ({
                color: theme.colors.brightBlue
              })}
            >
              {s.title}
            </Headline>
            <ul>
              {s.list.map(item => (
                <Text spacing={0} as="li">
                  {item.text}
                </Text>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Services;

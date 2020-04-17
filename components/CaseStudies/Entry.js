/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import convert from "htmr";
import Headline from "../UI/Headline";
import Text from "../UI/Text";

function Entry(props) {
  return (
    <Link href={`/case-studies/${props.slug}/`} passHref>
      <a
        css={theme => ({
          textDecoration: "none",
          display: "block",
          color: "black",
          transition: ".3s ease",
          "&:hover": {
            backgroundColor: theme.colors.slate
          }
        })}
      >
        <div
          css={theme => ({
            padding: theme.spacing[1],
            marginBottom: theme.spacing[2]
          })}
        >
          <Headline as="h2" size={1}>
            {convert(props.headline)}
          </Headline>
          <Text css={{ marginBottom: "0px" }}>{convert(props.excerpt)}</Text>
        </div>
      </a>
    </Link>
  );
}

export default Entry;

/** @jsx jsx */
import Layout from "../../../components/Layout";
import { jsx } from "@emotion/core";
import convert from "htmr";
import Wrapper from "../../../components/UI/Wrapper";
import Headline from "../../../components/UI/Headline";
import Text from "../../../components/UI/Text";

export default function({ data, authorData }) {
  const transform = {
    h2: props => <Headline as="h2" size={1} {...props} />,
    h3: props => <Headline as="h3" size={0} {...props} />,
    li: props => <Text as="li" {...props} />,
    p: props => <Text {...props} />
  };

  const headline = convert(data.title.rendered);
  const bodyCopy = convert(data.content.rendered, { transform });

  return (
    <Layout>
      <Wrapper
        width={0}
        css={theme => ({
          marginBottom: theme.spacing[3],
          marginTop: theme.spacing[3]
        })}
      >
        <Headline
          display
          as="h1"
          css={theme => ({ color: theme.colors.brightBlue })}
        >
          {headline}
        </Headline>
        <Wrapper size={0}>{bodyCopy}</Wrapper>
        <div
          css={theme => ({
            backgroundColor: theme.colors.slate,
            display: "flex",
            alignItems: "center",
            padding: theme.spacing[1],
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center"
          })}
        >
          <img
            css={theme => ({
              borderRadius: "100%",
              maxWidth: "75px",
              marginBottom: theme.spacing[0]
            })}
            src={authorData.avatar_urls["96"]}
          />
          <Text spacing={0}>{authorData.name}</Text>
          <Text>{convert(authorData.description)}</Text>
        </div>
      </Wrapper>
    </Layout>
  );
}

export async function unstable_getStaticProps({ params }) {
  const fetch = require("node-fetch");

  const data = await fetch(
    `https://admin.tiltmetrics.com/wp-json/wp/v2/case_study/?slug=${
      params.slug
    }`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data[0];
    })
    .catch(err => console.log(err));

  const authorData = await fetch(data._links.author[0].href)
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));

  return {
    props: {
      data,
      authorData
    }
  };
}

export async function unstable_getStaticPaths() {
  const fetch = require("node-fetch");

  const data = await fetch(
    "https://admin.tiltmetrics.com/wp-json/wp/v2/case_study"
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));

  const paths = data.map(d => ({
    params: { slug: d.slug }
  }));

  return [...paths];
}

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Layout from "../../components/Layout";
import Wrapper from "../../components/UI/Wrapper";
import Entry from "../../components/CaseStudies/Entry";

export default function({ data }) {
  return (
    <Layout>
      <Wrapper
        width={0}
        css={theme => ({
          marginBottom: theme.spacing[3],
          marginTop: theme.spacing[3]
        })}
      >
        {data.map(d => (
          <Entry
            headline={d.title.rendered}
            slug={d.slug}
            excerpt={d.excerpt.rendered}
          />
        ))}
      </Wrapper>
    </Layout>
  );
}

export async function unstable_getStaticProps() {
  const fetch = require("node-fetch");

  const data = await fetch(
    `https://admin.tiltmetrics.com/wp-json/wp/v2/case_study/`
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));

  return {
    props: {
      data
    }
  };
}

/** @jsx jsx */
import { jsx } from "@emotion/core";
import convert from "htmr";
import Wrapper from "../../components/UI/Wrapper";
import Entry from "../../components/CaseStudies/Entry";

export default function({ data }) {
  return (
    <Wrapper
      width={0}
      css={theme => ({
        marginBottom: theme.spacing[2],
        marginTop: theme.spacing[2]
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

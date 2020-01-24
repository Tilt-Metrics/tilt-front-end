import Hero from "../components/Home/Hero";

export default function({ data }) {
  return (
    <div>
      <Hero headline={data.hero.headline} subheadline={data.hero.subheadline} />
    </div>
  );
}

export async function unstable_getStaticProps() {
  const fetch = require("node-fetch");

  const data = await fetch(
    "https://admin.tiltmetrics.com/wp-json/wp/v2/pages/?slug=home"
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data[0].acf;
    })
    .catch(err => console.log(err));

  return {
    props: {
      data
    }
  };
}

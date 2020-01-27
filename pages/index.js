import Hero from "../components/Home/Hero";
import Clients from "../components/Home/Clients";
import Services from "../components/Home/Services";

export default function({ data }) {
  return (
    <div>
      <Hero headline={data.hero.headline} subheadline={data.hero.subheadline} />
      <Clients
        label={data.clients.label}
        headline={data.clients.headline}
        logos={data.clients.logos}
      />
      <Services
        label={data.services.label}
        headline={data.services.headline}
        subheadline={data.services.subheadline}
        servicesGroup={data.services.servicesGroup}
      />
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

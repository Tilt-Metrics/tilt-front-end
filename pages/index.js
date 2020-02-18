import Hero from "../components/Home/Hero";
import Clients from "../components/Home/Clients";
import Process from "../components/Home/Process";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonial";
import ContactForm from "../components/Home/ContactForm";

export default function({ data }) {
  return (
    <div>
      <Hero headline={data.hero.headline} subheadline={data.hero.subheadline} />
      <Services
        label={data.services.label}
        headline={data.services.headline}
        subheadline={data.services.subheadline}
        servicesGroup={data.services.servicesGroup}
      />
      <Clients
        label={data.clients.label}
        headline={data.clients.headline}
        logos={data.clients.logos}
      />
      <Process items={data.process} />
      <Testimonial
        quote={data.testimonial.quote}
        author={data.testimonial.author}
        title={data.testimonial.title}
        image={data.testimonial.image.url}
        stats={data.testimonial.stats}
      />
      <ContactForm
        label={data.contact.label}
        headline={data.contact.headline}
        subheadline={data.contact.subheadline}
        buttonText={data.contact.buttontext}
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

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";
import Layout from "../components/Layout";
import Wrapper from "../components/UI/Wrapper";
import Headline from "../components/UI/Headline";
import Text from "../components/UI/Text";
import TextLink from "../components/UI/TextLink";
import ContactForm from "../components/Contact/ContactForm";

export default function() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Wrapper
        css={theme => ({
          marginBottom: theme.spacing[3],
          marginTop: theme.spacing[3]
        })}
      >
        <Headline
          as="h1"
          display={true}
          css={theme => ({ color: theme.colors.brightBlue })}
        >
          Contact
        </Headline>
        <Headline size={1} as="h2">
          Let's get the ball rolling.
        </Headline>
        <div
          css={theme => ({
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: theme.spacing[2]
          })}
        >
          <div>
            <ContactForm />
          </div>
          <div>
            <Text
              spacing={0}
              css={theme => ({
                fontSize: theme.copySizes[1],
                textTransform: "uppercase",
                fontWeight: "bold",
                color: theme.colors.brightBlue
              })}
            >
              Contact Info
            </Text>
            <TextLink href="mailto:hello@tiltmetics.com">
              hello@tiltmetrics.com
            </TextLink>
            <br />
            <TextLink href="tel:4015155940">(401) 515-5940</TextLink>
            <br />
            <TextLink href="https://goo.gl/maps/C25837YmXQo9cHbGA">
              56 Exchange Terrace #210 Providence, RI 02903
            </TextLink>
            <Text
              spacing={0}
              css={theme => ({
                fontSize: theme.copySizes[1],
                textTransform: "uppercase",
                fontWeight: "bold",
                color: theme.colors.brightBlue
              })}
            >
              Social
            </Text>
            <TextLink
              css={theme => ({
                marginRight: theme.spacing[0]
              })}
              href="mailto:hello@tiltmetics.com"
            >
              Twitter
            </TextLink>
            <TextLink
              css={theme => ({
                marginRight: theme.spacing[0]
              })}
              href="mailto:hello@tiltmetics.com"
            >
              Facebook
            </TextLink>
            <TextLink href="mailto:hello@tiltmetics.com">Linkedin</TextLink>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

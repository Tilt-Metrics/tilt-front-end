/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useScrollPercentage } from "react-scroll-percentage";

import Wrapper from "../UI/Wrapper";
import Headline from "../UI/Headline";
import Text from "../UI/Text";
import ProcessGraph from "./ProcessGraph";
import ProcessItem from "./ProcessItem";

const variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.01
    }
  }
};

export default function(props) {
  const [visible, setVisible] = useState(false);
  const [ref, percentage] = useScrollPercentage({
    threshold: 0
  });

  return (
    <>
      <Wrapper id="process" css={theme => ({ marginBottom: theme.spacing[2] })}>
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
      </Wrapper>
      <InView
        as="div"
        threshold={[0.1]}
        onChange={inView => (inView ? setVisible(true) : setVisible(false))}
        css={theme => ({
          marginBottom: theme.spacing[3]
        })}
      >
        <motion.div
          variants={variants}
          animate={visible ? "visible" : "hidden"}
          css={{
            position: "fixed",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: -1
          }}
        >
          <ProcessGraph percent={percentage} />
        </motion.div>
        <div
          ref={ref}
          css={{
            zIndex: 9999,
            position: "relative"
          }}
        >
          {props.items.map((item, idx) => (
            <ProcessItem item={item} key={idx} />
          ))}
        </div>
      </InView>
    </>
  );
}

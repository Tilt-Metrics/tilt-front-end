/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useScrollPercentage } from "react-scroll-percentage";

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
    <InView
      as="div"
      id="process"
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
          zIndex: 99999,
          position: "relative"
        }}
      >
        {props.items.map((item, idx) => (
          <ProcessItem item={item} key={idx} />
        ))}
      </div>
    </InView>
  );
}

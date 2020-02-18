/** @jsx jsx */
import { jsx } from "@emotion/core";
import ProcessItem from "./ProcessItem";
import ProcessGraph from "./ProcessGraph";
import { useScrollPercentage } from "react-scroll-percentage";

function Process(props) {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0
  });

  return (
    <div>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100vh",
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: -1,
          overflowX: "visible"
        }}
      >
        <ProcessGraph percent={percentage} />
      </div>
      <div css={{ transform: "translateY(-100vh)" }} ref={ref}>
        {props.items.map((item, idx) => (
          <ProcessItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Process;

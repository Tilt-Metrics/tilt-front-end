import styled from "@emotion/styled";
import { mq } from "../../lib/utils";

const Wrapper = styled.div(props =>
  mq({
    margin: "0 auto",
    maxWidth: props.theme.maxWidths[props.width],
    padding: ["0px 15px", "0px 30px"]
  })
);

Wrapper.defaultProps = {
  width: 1
};

export default Wrapper;

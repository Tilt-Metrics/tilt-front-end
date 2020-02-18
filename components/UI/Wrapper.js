import styled from "@emotion/styled";

const Wrapper = styled.div(props => ({
  margin: "0 auto",
  maxWidth: props.theme.maxWidths[props.width],
  padding: "0px 30px"
}));

Wrapper.defaultProps = {
  width: 1
};

export default Wrapper;

import styled from "@emotion/styled";

const Wrapper = styled.div({
  margin: "0 auto",
  maxWidth: props => props.theme.maxWidth[props.width],
  padding: "0px 30px"
});

Wrapper.defaultProps = {
  width: 1
};

export default Wrapper;

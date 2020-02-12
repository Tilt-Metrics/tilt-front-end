import styled from "@emotion/styled";

const Headline = styled.h1(props => ({
  fontSize: props.theme.headingSizes[props.size],
  fontFamily: props.display
    ? props.theme.fonts.display
    : props.theme.fonts.body,
  marginBottom: props.theme.spacing[props.spacing]
}));

Headline.defaultProps = {
  size: 3,
  spacing: 1,
  display: false
};

export default Headline;

import styled from "@emotion/styled";

const Headline = styled.h1(props => ({
  fontSize: props.theme.headingSizes[props.size],
  fontFamily: props.displayFont
    ? props.theme.fonts.display
    : props.theme.fonts.body,
  marginBottom: props.theme.spacing[props.spacing]
}));

Headline.defaultProps = {
  size: 3,
  spacing: 1,
  displayFont: false
};

export default Headline;

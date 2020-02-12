import styled from "@emotion/styled";

const Text = styled.p(props => ({
  fontSize: props.theme.copySizes[props.size],
  color: props.theme.colors[props.color],
  marginBottom: props.theme.spacing[props.spacing],
  textTransform: props.uppercase ? "uppercase" : "none",
  fontWeight: props.bold ? "bold" : "normal",
  lineHeight: props.theme.lineHeights[1]
}));

Text.defaultProps = {
  size: 1,
  color: "concrete",
  spacing: 1,
  uppercase: false,
  bold: false
};

export default Text;

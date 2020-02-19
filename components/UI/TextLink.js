import styled from "@emotion/styled";

const TextLink = styled.a(props => ({
  fontSize: props.theme.copySizes[props.size],
  color: props.theme.colors[props.color],
  marginBottom: props.theme.spacing[props.spacing],
  borderBottom: `2px solid ${props.theme.colors.slate}`,
  lineHeight: props.theme.lineHeights[1],
  transition: ".3s ease",
  textDecoration: "none",
  "&:hover": {
    borderBottom: `2px solid ${props.theme.colors.coral}`
  }
}));

TextLink.defaultProps = {
  size: 1,
  spacing: 1,
  color: "concrete"
};

export default TextLink;

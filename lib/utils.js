import facepaint from "facepaint";
import theme from "./theme";

export const mq = facepaint(
  theme.breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

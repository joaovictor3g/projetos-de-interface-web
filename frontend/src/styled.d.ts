import "styled-components";
import { theme } from "@/styles";

declare module "styled-components" {
  type Theme = typeof theme;

  export interface DefaultTheme extends Theme {}
}

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      card: string;
      text: string;
      muted: string;
      brand: string;
      brand2: string;
      border: string;
    };
    radius: {
      lg: string;
    };
    shadow: {
      soft: string;
    };
  }
}
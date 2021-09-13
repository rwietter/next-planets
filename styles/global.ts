import { globalCss } from "@stitches/react";

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    position: `relative`,
  },
  body: {
    position: `relative`,
    boxSizing: `border-box`,
    background: `#151718`,
    fontFamily: `Untitled Sans`,
  },
  '@font-face': {
    fontFamily: `Untitled Sans`,
    src: `local("./public/fonts/UntitledSansWeb-Regular.woff2"),
    url("public/fonts/UntitledSansWeb-Medium.woff2")`,
  },
});

export { GlobalStyles };

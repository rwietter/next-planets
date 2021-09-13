import { styled } from "@stitches/react";

const Background = styled(`div`, {
  inset: `0px`,
  position: `absolute`,
  zIndex: 1,
  background: `radial-gradient(circle at top left,
    #2c2250, rgba(255, 255, 255, 0) 40%),
    radial-gradient(circle at 80% 20%, #07303b,
    rgba(255, 255, 255, 0) 30%)`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  bottom: 0,
  width: `100vw`,
  height: `100vh`,
  overflowX: `hidden`,
});

export { Background };

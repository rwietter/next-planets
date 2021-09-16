import { keyframes, styled } from "@stitches/react";
import { motion } from "framer-motion";

const wapperBackdrop = {
  bottom: 0,
  left: 0,
  position: `fixed`,
  height: `100%`,
  overflow: `auto`,
  width: `100%`,
  top: `5rem`,
};

export const FadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: `translate3d(0, 100%, 0)`,
  },

  '100%': {
    opacity: 1,
    transform: `translate3d(0, 0, 0)`,
  },
});

export const Wrapper = styled(motion.div, {
  backgroundImage: `linear-gradient(to left top, #151718, #151718, #151718, #151718,
  #151718, #15191b, #161b1d, #161d20, #162126, #16252c, #162a32, #152e38);`,
  zIndex: 4,
  minHeight: `100vh`,
  boxShadow: `0 -3px 39px rgba(0, 0, 0, 0.5)`,
  ...wapperBackdrop,
});

export const WrapperGradient = styled(motion.div, {
  background: `radial-gradient(circle at top left,
    #2c2250, rgba(255, 255, 255, 0) 40%),
    radial-gradient(circle at 80% 20%, #07303b,
    rgba(255, 255, 255, 0) 30%)`,
  zIndex: 5,
  ...wapperBackdrop,
});

export const Button = styled(`button`, {
  position: `absolute`,
  zIndex: 7,
  right: `40px`,
  top: `30px`,
  outline: `none`,
  border: `none`,
  cursor: `pointer`,
  background: `transparent`,
  padding: `1rem`,
  width: `3rem`,
  height: `3rem`,
  transition: `all .4s ease`,

  '@media(min-width: 520px)': {
    right: `70px`,
  },
});

export const SectionTitle = styled(`section`, {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  flexFlow: `column`,
  position: `absolute`,
  zIndex: 10,
  left: 0,
  top: `5rem`,
  right: 0,
});

export const Title = styled(motion.h1, {
  color: `#fff`,
  textAlign: `center`,
  fontSize: `clamp(1.5rem, 3vw, 2.9rem)`,
  fontFamily: `Untitled Sans`,
  fontWeight: 700,
  boxShadow: `inset 0 -20px 0 rgba(140, 75, 254, 0.4)`,
});

export const Cards = styled(`section`, {
  display: `grid`,
  gridTemplateColumns: `1fr`,
  gap: `2rem`,
  placeItems: `center`,
  placeContent: `center`,
  justifyContent: `center`,
  alignItems: `center`,
  width: `90%`,
  margin: `0 auto`,
  marginTop: `10rem`,
  padding: `2rem 0 7rem 0`,

  '@media(min-width: 920px)': {
    gridTemplateColumns: `1fr 1fr`,
  },

  '@media(min-width: 1500px)': {
    gridTemplateColumns: `1fr 1fr 1fr`,
  },
});

export const Card = styled(motion.section, {
  backgroundImage: `linear-gradient(to left top, #151718, #151718, #151718, #151718,
  #151718, #15191b, #161b1d, #161d20, #162126, #16252c, #162a32, #152e38);`,
  width: `100%`,
  minHeight: `15rem`,
  position: `relative`,
  borderRadius: `8px`,
  color: `#fff`,
});

export const IconThemeContainer = styled(`div`, {
  height: `8rem`,
  position: `relative`,
});

export const IconTheme = styled(`div`, {
  backgroundImage: `linear-gradient(to left top, #151718, #151718, #151718, #151718,
  #151718, #15191b, #161b1d, #161d20, #162126, #16252c, #162a32, #152e38);`,
  clipPath: `circle(55.1% at 18% 17%)`,
  width: `9rem`,
  height: `9rem`,
  transition: `all 0.4s ease`,
  position: `absolute`,
  display: `flex`,
  alignItems: `flex-start`,
  justifyContent: `flex-start`,
  transform: `perspective(9rem) `,

  '&:hover': {
    width: `10rem`,
    height: `10rem`,
  },

  '& div': {
    margin: `1rem 0 0 1rem !important`,
  },
});

export const DescriptionContainer = styled(`div`, {
  padding: `0 0 1rem 1rem`,
  lineHeight: 1.9,
});

export const DescriptionTitle = styled(motion.h3, {
  fontSize: `clamp(1rem, 2vw, 1.3rem)`,
  listStyle: `none`,

  '&:before': {
    content: `─ `,
    color: `#FFC75F`,
  },
});

export const Description = styled(motion.p, {
  fontSize: `clamp(1rem, 2vw, 1.1rem)`,
  boxShadow: `inset 0 -10px 0 RGBA(77, 188, 156, 0.5)`,
  maxWidth: `max-content`,
});

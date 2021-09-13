import { styled } from '@stitches/react';
import Image from 'next/image';

const Card = styled(`section`, {
  backgroundImage: `linear-gradient(to left top, #151718, #151718, #151718, #151718,
  #151718, #15191b, #161b1d, #161d20, #162126, #16252c, #162a32, #152e38);`,
  width: `100%`,
  minHeight: `15rem`,
  marginTop: `5rem`,
  borderTopRightRadius: `4rem`,
  borderBottomLeftRadius: `4rem`,
  position: `relative`,
});

const CardImage = styled(`div`, {
  position: `absolute`,
  top: `-20px`,
  right: `-4px`,
});

const PlanetImage = styled(Image, {
  position: `absolute`,
  top: 0,
  right: `20px`,
});

const CardInfo = styled(`div`, {
  padding: `1.5rem 1.5rem 0 1.5rem`,
  display: `flex`,
  justifyContent: `space-between`,
  flexFlow: `column`,
  alignItems: `start`,
  height: `100%`,
});

const CardTitle = styled(`h1`, {
  color: `#fff`,
  fontFamily: `Untitled Sans, apple-system, sans-serif`,
  fontSize: `clamp(1.2rem, 2vw, 1.6rem)`,
  padding: 0,

  '&::before': {
    content: `─`,
    color: `#FFC058`,
    paddingRight: `20px`
  },
});

const CardPlanetInfo = styled(`ul`, {
  color: `#fff`,
  fontFamily: `Untitled Sans, apple-system, sans-serif`,
  fontSize: `clamp(0.9rem, 2vw, 1.1rem)`,
  display: `flex`,
  flexFlow: `column`,
  lineHeight: 1.6,
  justifyContent: `space-evenly`,
  margin: 0,

  'li': {
    margin: 0,
    marginRight: `2rem`,
    padding: 0,
  },
});

const CardMoreInfo = styled(`button`, {
  position: `absolute`,
  right: `30px`,
  bottom: `20px`,
  color: `#9e8cfc`,
  background: `#2c2250`,
  fontFamily: `Untitled Sans, apple-system, sans-serif`,
  fontSize: `clamp(0.9rem, 2vw, 1.2rem)`,
  textAlign: `center`,
  marginTop: `2rem`,
  padding: `.5rem`,
  width: `8rem`,
  height: `2.5rem`,
  border: `none`,
  outline: `none`,
  cursor: `pointer`,
  transition: `.4s ease`,

  '&:hover': {
    background: `#4F3FA7`,
  },
});

export {
  Card,
  CardImage,
  PlanetImage,
  CardInfo,
  CardTitle,
  CardPlanetInfo,
  CardMoreInfo,
};

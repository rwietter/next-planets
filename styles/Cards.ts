import { styled } from '@stitches/react';

const Cards = styled(`section`, {
  display: `grid`,
  gridTemplateColumns: `1fr`,
  gap: `6rem 3rem`,
  placeItems: `center`,
  placeContent: `center`,
  padding: `8rem 1rem`,
  width: `calc(100vw - 2rem)`,

  '@media(min-width: 920px)': {
    gridTemplateColumns: `1fr 1fr`,
    width: `calc(90vw - 3rem)`,
  },

  '@media(min-width: 1500px)': {
    gridTemplateColumns: `1fr 1fr 1fr`,
  },
});

export { Cards };

import { styled } from '@stitches/react';

const Cards = styled(`section`, {
  display: `grid`,
  gridTemplateColumns: `1fr`,
  gap: `3rem`,
  placeItems: `center`,
  placeContent: `center`,
  padding: `5rem 1rem`,
  width: `calc(90vw - 3rem)`,

  '@media(min-width: 920px)': {
    gridTemplateColumns: `1fr 1fr`,
  },

  '@media(min-width: 1500px)': {
    gridTemplateColumns: `1fr 1fr 1fr`,
  },
});

export { Cards };

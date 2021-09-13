/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */

import { keyframes, styled } from '@stitches/react';

import {
  FC,
} from 'react';

import { IPlanet } from '../@types/Planet';

export interface IModalProps {
  planet: IPlanet;
  visible: boolean;
  handleShowModal: () => void;
}
const PlanetModal: FC<IModalProps> = (props) => {
  if (!props.visible) return null;

  return (
    <Wrapper
      css={{
        background: `#111`,
        width: `100vw`,
        height: `90vh`,
        position: `fixed`,
        top: `10vh`,
        left: 0,
        right: 0,
      }}>
      <button type="button" onClick={props.handleShowModal}>
        {props.planet.englishName}
      </button>
    </Wrapper>
  );
};


const FadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: `translate3d(0, 100%, 0)`,
  },

  '100%': {
    opacity: 1,
    transform: `translate3d(0, 0, 0)`,
  },
});

const Wrapper = styled(`div`, {
  animation: `${FadeInUp} 500ms ease both`,
});



export default PlanetModal;

/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */

import { FC } from 'react';

import { IPlanet } from '../@types/Planet';
import {
  Button,
  SectionTitle,
  Title,
  Cards,
  Wrapper,
  WrapperGradient,
  Card,
} from '../styles/PlanetModal';

export interface IModalProps {
  planet: IPlanet;
  visible: boolean;
  handleShowModal: () => void;
}

const PlanetModal: FC<IModalProps> = (props) => {
  if (!props.visible) return null;
  console.log(props.planet);
  
  return (
    <Wrapper>
      <WrapperGradient>
        <SectionTitle>
          <Title>{props.planet.englishName.toUpperCase()}</Title>
        </SectionTitle>
        <Button type="button" onClick={props.handleShowModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="#FFFFFF"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Button>
        <main>
          <Cards>
            <Card>Aphelion: {props.planet.aphelion} Km</Card>
            <Card>Perihelion: {props.planet.perihelion} Km</Card>
            <Card>Sideral Rotation: {props.planet.sideralRotation} hour</Card>
            <Card>
              Volume:
              {props.planet.vol.volValue}*10^{props.planet.vol.volExponent}
            </Card>
            <Card>
              Massa:
              {props.planet.mass.massValue}*10^{props.planet.mass.massExponent}
            </Card>
            <Card>Inclinação: {props.planet.inclination}°</Card>
          </Cards>
        </main>
      </WrapperGradient>
    </Wrapper>
  );
};


export default PlanetModal;

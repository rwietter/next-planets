/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */

import Image from 'next/image';

import { FC } from 'react';

import { IPlanet } from '../@types/Planet';
import Mass from '../public/images/mass-planet.svg';
import Perihelion from '../public/images/Perihelion.svg';
import Volume from '../public/images/planet-saturn-volume.svg';
import EquPlanet from '../public/images/quatorial-planet.svg';
import SideralOrbit from '../public/images/sideral-orbit.svg';
import Aphelion from '../public/images/solar-system.svg';
import {
  Button,
  SectionTitle,
  Title,
  Cards,
  Wrapper,
  WrapperGradient,
  Card,
  IconTheme,
  IconThemeContainer,
  DescriptionContainer,
  DescriptionTitle,
  Description,
} from '../styles/PlanetModal';
import {
  cardVariant,
  descriptionVariant,
  planetVariants,
  titleVariant,
} from '../utils/animations';

export interface IModalProps {
  planet: IPlanet;
  visible: boolean;
  handleShowModal: () => void;
}

const PlanetModal: FC<IModalProps> = (props) => (
  <Wrapper>
    <WrapperGradient>
      <SectionTitle>
        <Title variants={planetVariants} initial="hidden" animate="visible">
          {props.planet.englishName.toUpperCase()}
        </Title>
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
          <Card variants={cardVariant} initial="hidden" animate="visible">
            <IconThemeContainer>
              <IconTheme>
                <Image src={Aphelion} width="40px" height="40px" />
              </IconTheme>
            </IconThemeContainer>
            <DescriptionContainer>
              <DescriptionTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible">
                Aphelion
              </DescriptionTitle>
              <Description
                variants={descriptionVariant}
                initial="hidden"
                animate="visible">
                {props.planet.aphelion} Km
              </Description>
            </DescriptionContainer>
          </Card>
          <Card variants={cardVariant} initial="hidden" animate="visible">
            <IconThemeContainer>
              <IconTheme>
                <Image src={Perihelion} width="40px" height="40px" />
              </IconTheme>
            </IconThemeContainer>
            <DescriptionContainer>
              <DescriptionTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible">
                Perihelion
              </DescriptionTitle>
              <Description
                variants={descriptionVariant}
                initial="hidden"
                animate="visible">
                {props.planet.perihelion} Km
              </Description>
            </DescriptionContainer>
          </Card>
          <Card variants={cardVariant} initial="hidden" animate="visible">
            <IconThemeContainer>
              <IconTheme>
                <Image src={SideralOrbit} width="40px" height="40px" />
              </IconTheme>
            </IconThemeContainer>
            <DescriptionContainer>
              <DescriptionTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible">
                Sideral Orbit
              </DescriptionTitle>
              <Description
                variants={descriptionVariant}
                initial="hidden"
                animate="visible">
                {props.planet.sideralOrbit} Days
                {` `}|{` `}
                {(props.planet.sideralOrbit / 365).toFixed(2)} Years
              </Description>
            </DescriptionContainer>
          </Card>
          <Card variants={cardVariant} initial="hidden" animate="visible">
            <IconThemeContainer>
              <IconTheme>
                <Image src={Volume} width="40px" height="40px" />
              </IconTheme>
            </IconThemeContainer>
            <DescriptionContainer>
              <DescriptionTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible">
                Volume
              </DescriptionTitle>
              <Description
                variants={descriptionVariant}
                initial="hidden"
                animate="visible">
                {props.planet.vol.volValue}×10^
                {props.planet.vol.volExponent} Km³
              </Description>
            </DescriptionContainer>
          </Card>
          <Card variants={cardVariant} initial="hidden" animate="visible">
            <IconThemeContainer>
              <IconTheme>
                <Image src={Mass} width="40px" height="40px" />
              </IconTheme>
            </IconThemeContainer>
            <DescriptionContainer>
              <DescriptionTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible">
                Mass
              </DescriptionTitle>
              <Description
                variants={descriptionVariant}
                initial="hidden"
                animate="visible">
                {props.planet.mass.massValue}×10^
                {props.planet.mass.massExponent} Kg
              </Description>
            </DescriptionContainer>
          </Card>
          <Card variants={cardVariant} initial="hidden" animate="visible">
            <IconThemeContainer>
              <IconTheme>
                <Image src={EquPlanet} width="40px" height="40px" />
              </IconTheme>
            </IconThemeContainer>
            <DescriptionContainer>
              <DescriptionTitle
                variants={titleVariant}
                initial="hidden"
                animate="visible">
                Equatorial Radius
              </DescriptionTitle>
              <Description
                variants={descriptionVariant}
                initial="hidden"
                animate="visible">
                {props.planet.equaRadius.toFixed(1)} Km
              </Description>
            </DescriptionContainer>
          </Card>
        </Cards>
      </main>
    </WrapperGradient>
  </Wrapper>
);

export default PlanetModal;

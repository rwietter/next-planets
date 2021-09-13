import React from 'react';

import { IPlanet } from '../@types/Planet';
import {
  Card,
  CardImage,
  CardInfo,
  CardMoreInfo,
  CardPlanetInfo,
  CardTitle,
  PlanetImage,
} from '../styles/Card';
import { PlanetImages, PlanetState } from '../utils/planetsObj';

interface CardProps {
  planets: IPlanet[];
}

const CardPlanet: React.FC<CardProps> = ({ planets }) => (
  <>
    {planets.map((planet: IPlanet) => {
      const planetImg = PlanetImages[planet.englishName];
      const planetState = PlanetState[planet.englishName];
      return (
        <Card key={planet.id}>
          <CardImage>
            <PlanetImage
              className="planet"
              src={planetImg}
              alt={planet.englishName}
              width="110px"
              height="110px"
            />
          </CardImage>
          <CardInfo>
            <CardTitle>{planet.englishName}</CardTitle>

            <CardPlanetInfo>
              <li>Type:&nbsp;&nbsp;{planetState}</li>
              <li>Gravity:&nbsp;&nbsp;{planet.gravity}</li>
            </CardPlanetInfo>

            <CardMoreInfo>Conhecer</CardMoreInfo>
          </CardInfo>
        </Card>
      );
    })}
  </>
);

export { CardPlanet };

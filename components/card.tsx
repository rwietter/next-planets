import  { FC, useCallback, useEffect, useState } from 'react';

import { IPlanet } from '../@types/Planet';
import {
  Card,
  CardImage,
  CardInfo,
  CardMoreInfo,
  CardPlanetInfo,
  CardTitle,
  PlanetImage,
  rotate,
} from '../styles/Card';
import { PlanetImages, PlanetState } from '../utils/planetsObj';
import PlanetModal from "./planetModal";

interface CardProps {
  planets: IPlanet[];
}

const CardPlanet: FC<CardProps> = ({ planets }) => {
  const [visible, setVisible] = useState(false);
  const [thePlanet, setThePlanet] = useState<IPlanet>({} as IPlanet);

  const handleShowModal = useCallback(() => {
    setVisible(state => !state);
  }, []);

  const handleSetPlanet = (data: IPlanet) => {
    setThePlanet(data);
  };

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: `smooth`,
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [visible]);

  return (
    <>
      {planets.map((planet: IPlanet) => {
        const planetImg = PlanetImages[planet.englishName];
        const planetState = PlanetState[planet.englishName];
        return (
          <Card className="card" key={planet.englishName}>
            <CardImage
              css={{
                animation: `${rotate} 30000ms linear infinite both`,
              }}>
              <PlanetImage
                className="planet"
                src={planetImg}
                alt={planet.englishName}
                width="100px"
                height="100px"
              />
            </CardImage>
            <CardInfo>
              <CardTitle>{planet.englishName}</CardTitle>

              <CardPlanetInfo>
                <li>Type:&nbsp;&nbsp;{planetState}</li>
                <li>Gravity:&nbsp;&nbsp;{planet.gravity}</li>
              </CardPlanetInfo>

              <CardMoreInfo
                type="button"
                onClick={() => {
                  handleSetPlanet(planet);
                  handleShowModal();
                }}>
                Conhecer
              </CardMoreInfo>
            </CardInfo>
          </Card>
        );
      })}
      <PlanetModal
        planet={thePlanet}
        handleShowModal={handleShowModal}
        visible={visible}
      />
    </>
  );
};

export { CardPlanet };

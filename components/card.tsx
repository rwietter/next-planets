import { AnimatePresence } from 'framer-motion';

import { FC, useCallback, useState } from 'react';

import { IPlanet } from '../@types/Planet';
import {
  Card,
  CardAnimation,
  CardImage,
  CardInfo,
  CardMoreInfo,
  CardPlanetInfo,
  CardTitle,
  PlanetImage,
  rotate,
} from '../styles/Card';
import { modalVariants } from '../utils/animations';
import { PlanetImages, PlanetState } from '../utils/planetsObj';
import PlanetModal from './planetModal';

interface CardProps {
  planets: IPlanet[];
}

const CardPlanet: FC<CardProps> = ({ planets }) => {
  const [visible, setVisible] = useState(false);
  const [thePlanet, setThePlanet] = useState<IPlanet>({} as IPlanet);

  const handleShowModal = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  const handleSetPlanet = (data: IPlanet) => {
    setThePlanet(data);
  };

  return (
    <>
      {planets.map((planet: IPlanet, i) => {
        const planetImg = PlanetImages[planet.englishName];
        const planetState = PlanetState[planet.englishName];
        return (
          <Card key={planet.englishName} whileHover={{ scale: 1.02 }}>
            <CardImage
              css={{
                animation: `${rotate} ${
                  i * i < 5 ? `3` : i * i
                }999ms linear infinite both`,
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
                See more
              </CardMoreInfo>
            </CardInfo>
          </Card>
        );
      })}
      <AnimatePresence>
        {visible && (
          <CardAnimation
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="modal">
            <PlanetModal
              planet={thePlanet}
              handleShowModal={handleShowModal}
              visible={visible}
            />
          </CardAnimation>
        )}
      </AnimatePresence>
    </>
  );
};

export { CardPlanet };

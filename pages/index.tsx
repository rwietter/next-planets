import type { NextPage } from 'next';

import { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { IIsNotPlanet, IIsPlanet, IPlanetSideralOrbit } from '../@types/Planet';
import { SpaceAPI } from '../api';
import { CardPlanet } from '../components/card';
import { Header } from '../components/head';
import { SkeletonCard } from '../components/skeletonCard';
import { Background } from '../styles/Background';
import { Cards } from '../styles/Cards';
import { Main } from '../styles/Main';
import { NotPlanets } from '../utils/planetsObj';

const Home: NextPage = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { GlobalStyles } = await import(`../styles/global`);
      GlobalStyles();
    })();
  }, []);

  const getPlanets = async () => {
    const { data: spaceObject } = await SpaceAPI.get(`rest/bodies/`);

    const spacePlanets = spaceObject?.bodies?.filter(
      (object: IIsPlanet) => object.isPlanet
    );

    const realPlanets = spacePlanets
      .filter((planet: IIsNotPlanet) => {
        const { id } = planet;
        return !NotPlanets[id];
      }, {})
      .sort(
        (
          prev: IPlanetSideralOrbit,
          next: IPlanetSideralOrbit
        ) => prev.sideralOrbit - next.sideralOrbit
      );
    setIsLoading((loading) => !loading);
    return setPlanets(realPlanets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Background>
      <Header />
      <Main>
        <SkeletonTheme color="#151718" highlightColor="#152e38">
          <Cards>
            {isLoading ? (
              <SkeletonCard count={8} />
            ) : (
              <CardPlanet planets={planets} />
            )}
          </Cards>
        </SkeletonTheme>
      </Main>
    </Background>
  );
};

export default Home;

import type { NextPage } from 'next';

import { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { IIsNotPlanet } from '../@types/Planet';
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
    const {
      data: { bodies: spaceObjects },
    } = await SpaceAPI.get(`rest/bodies/`, {
      data: `id,englishName,isPlanet,perihelion,aphelion,
      inclination,mass,vol,density,gravityescape,equaRadius,polarRadius,
      dimension,sideralOrbit,sideralRotation,discoveryDate,axialTilt,
      avgTemp`,
      params: {
        filter: `isPlanet,neq,true`,
        order: `sideralOrbit,asc`,
      },
    });
    
    if (!spaceObjects[0]) return false;

    const realPlanets = spaceObjects.filter((planet: IIsNotPlanet) => {
      const { id } = planet;
      return !NotPlanets[id];
    }, {});
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

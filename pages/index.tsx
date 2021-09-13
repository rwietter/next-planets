import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Planet } from '../@types/Planet';
import { Background } from '../styles/Background';
import {
  Card,
  CardImage,
  CardInfo,
  CardMoreInfo,
  CardPlanetInfo,
  CardTitle,
  PlanetImage,
} from '../styles/Card';
import { Cards } from '../styles/Cards';
import { Main } from '../styles/Main';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type IsPlanet = 'ceres' | 'eris' | 'pluton' | 'haumea' | 'makemake';

type IPlanets =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

type IPlanetSideralOrbit = {
  sideralOrbit: number;
};

type IPlanet = {
  isPlanet: boolean;
};

const Planets = {
  Mercury: require('../public/images/01-mercury.svg'),
  Venus: require('../public/images/02-venus.svg'),
  Earth: require('../public/images/03-earth.svg'),
  Mars: require('../public/images/04-mars.svg'),
  Jupiter: require('../public/images/05-jupiter.svg'),
  Saturn: require('../public/images/06-saturn.svg'),
  Uranus: require('../public/images/07-uranus.svg'),
  Neptune: require('../public/images/08-neptune.svg'),
};

const PlanetState = {
  Mercury: 'Sub-Earth',
  Venus: 'Sub-Earth',
  Earth: 'Earth analog',
  Mars: 'Sub-Earth',
  Jupiter: 'Giant planet',
  Saturn: 'Giant planet',
  Uranus: 'Ice Giant',
  Neptune: 'Ice Giant',
};

const Home: NextPage = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { GlobalStyles } = await import('../styles/global');
      return GlobalStyles ? GlobalStyles() : null;
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const filter = {
        ceres: 'ceres',
        eris: 'eris',
        pluton: 'pluton',
        haumea: 'haumea',
        makemake: 'makemake',
      };

      const { data: spaceObject } = await axios.get(
        'https://api.le-systeme-solaire.net/rest/bodies/'
      );
      const solarSytem = spaceObject?.bodies?.filter(
        (object: IPlanet) => object.isPlanet
      );
      const planets = solarSytem
        .filter((planet: { id: IsPlanet }) => {
          const id: IsPlanet = planet.id;
          return !filter[id];
        }, {})
        .sort(
          (prev: IPlanetSideralOrbit, next: IPlanetSideralOrbit) =>
            prev.sideralOrbit - next.sideralOrbit
        );
      console.log(planets);
      setIsLoading((loading) => !loading);
      return setPlanets(planets);
    })();
  }, []);

  return (
    <Background>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="../public/fonts/UntitledSansWeb-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/UntitledSansWeb-Medium.woff"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Main>
        <SkeletonTheme color="#151718" highlightColor="#152e38">
          <Cards>
            {isLoading ? (
              <>
                {Array(8)
                  .fill(8)
                  .map((item) => (
                    <Card key={item}>
                      <CardImage>
                        <Skeleton height={'7rem'} width={'7rem'} circle />
                      </CardImage>
                      <CardInfo>
                        <CardTitle>
                          <Skeleton height={'2rem'} width={'13rem'} />
                        </CardTitle>

                        <CardPlanetInfo>
                          <li>
                            <Skeleton height={'2rem'} width={'7rem'} />
                          </li>
                          <Skeleton height={'2rem'} width={'7rem'} />
                        </CardPlanetInfo>

                        <CardMoreInfo>Conhecer</CardMoreInfo>
                      </CardInfo>
                    </Card>
                  ))}
              </>
            ) : (
              planets.map((planet: Planet) => {
                const planetImg: IPlanets = Planets[`${planet.englishName}`];
                const planetState = PlanetState[`${planet.englishName}`];
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
              })
            )}
          </Cards>
        </SkeletonTheme>
      </Main>
    </Background>
  );
};

export default Home;

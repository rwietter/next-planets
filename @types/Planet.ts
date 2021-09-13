/* eslint-disable no-undef */

export interface IPlanet {
  alternativeName: string;
  aphelion: number;
  argPeriapsis: number;
  aroundPlanet: null;
  avgTemp: number;
  axialTilt: number;
  density: number;
  dimension: string;
  discoveredBy: string;
  discoveryDate: string;
  eccentricity: number;
  englishName:
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';
  equaRadius: number;
  escape: number;
  flattening: number;
  gravity: number;
  id: string;
  inclination: number;
  isPlanet: true;
  longAscNode: number;
  mainAnomaly: number;
  mass: {
    massValue: number;
    massExponent: number;
  };
  meanRadius: number;
  moons: null;
  name: string;
  perihelion: number;
  polarRadius: number;
  rel: URL;
  semimajorAxis: number;
  sideralOrbit: number;
  sideralRotation: number;
  vol: {
    volExponent: number;
    volValue: number;
  };
}

export type IIsNotPlanet = {
  id: 'ceres' | 'eris' | 'pluton' | 'haumea' | 'makemake';
};

export type IPlanetSideralOrbit = {
  sideralOrbit: number;
};

export type IIsPlanet = {
  isPlanet: boolean;
};

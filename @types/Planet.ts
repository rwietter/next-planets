export interface Planet {
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
  englishName: string;
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

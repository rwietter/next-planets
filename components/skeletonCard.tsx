import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import {
  Card,
  CardImage,
  CardInfo,
  CardMoreInfo,
  CardPlanetInfo,
  CardTitle,
// eslint-disable-next-line import/extensions
} from '../styles/Card';

interface CardProps {
  count: number;
}

const SkeletonCard: FC<CardProps> = ({ count }) => (
  <>
    {Array(count)
      .fill(count)
      .map((item: number) => (
        <Card key={item.toString()}>
          <CardImage>
            <Skeleton height="7rem" width="7rem" circle />
          </CardImage>
          <CardInfo>
            <CardTitle>
              <Skeleton height="2rem" width="13rem" />
            </CardTitle>

            <CardPlanetInfo>
              <li>
                <Skeleton height="1rem" width="7rem" />
              </li>
              <Skeleton height="1rem" width="7rem" />
            </CardPlanetInfo>

            <CardMoreInfo>Conhecer</CardMoreInfo>
          </CardInfo>
        </Card>
      ))}
  </>
);

export { SkeletonCard };

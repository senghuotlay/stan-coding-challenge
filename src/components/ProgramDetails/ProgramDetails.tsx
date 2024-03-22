import React from 'react';
import { Skeleton } from '../Skeleton';

type ProgramDetailsProps = {
  title: string;
  description: string;
  rating: string;
  year: number;
  genre: string;
  language: string;
  isLoading?: boolean;
};

export const ProgramDetails = ({
  title,
  description,
  rating,
  year,
  genre,
  language,
  isLoading,
}: ProgramDetailsProps) => {
  const details = [rating, year, genre, language];

  return (
    <div
      style={{
        gap: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%',
        flex: 1,
      }}
    >
      <div>
        <Skeleton width={'30%'} height={30} isLoading={isLoading}>
          <h1
            style={{
              margin: 0,
            }}
          >
            {title}
          </h1>
        </Skeleton>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
        }}
      >
        <Skeleton width={'50%'} height={30} isLoading={isLoading}>
          {details.map((detail, index) => (
            <h3
              key={index}
              style={{
                margin: 0,
              }}
            >
              {detail} {details.length - 1 === index ? '' : '|'}
            </h3>
          ))}
        </Skeleton>
      </div>

      <Skeleton width={'80%'} height={150} isLoading={isLoading}>
        <h3>{description}</h3>
      </Skeleton>
    </div>
  );
};

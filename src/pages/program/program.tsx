import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { ProgramType } from '../../types/Program';
import { Error } from '../../components/Error';
import {
  CarouselCard,
  CarouselCardSkeleton,
} from '../../components/CarouselCard';
import { ProgramDetails } from '../../components/ProgramDetails';

export const Program = () => {
  const params = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const routerProps = location.state as ProgramType | null;

  const { data, loading, error } = useQuery<ProgramType[]>({
    apiUrl: '/data.json',
    skip: !!routerProps?.id,
  });

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace') {
        navigation('..');
      }
    });
  }, []);

  const programData = useMemo(() => {
    if (routerProps?.id) {
      return routerProps;
    }
    return data?.find((program) => program.id === Number(params.id));
  }, [data]);

  if (error || !programData) {
    return <Error errorMessage={error} />;
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '3rem',
      }}
    >
      {loading ? (
        <CarouselCardSkeleton />
      ) : (
        <CarouselCard imageUrl={programData.image} title={programData.title} />
      )}

      <ProgramDetails {...programData} isLoading={false} />
    </div>
  );
};

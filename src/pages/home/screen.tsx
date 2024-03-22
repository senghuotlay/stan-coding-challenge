import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { Carousel } from '../../components/Carousel/Carousel';
import {
  CarouselCard,
  CarouselCardSkeleton,
} from '../../components/CarouselCard';
import { useNavigate } from 'react-router-dom';
import { Program } from '../../types/Program';

export const Home = () => {
  const { data, loading, error } = useQuery<Program[]>({
    apiUrl: '/data.json',
  });

  const navigate = useNavigate();

  const navigateToProgram = (item: Program) => {
    navigate(`/program/${item.id}`, { state: item });
  };

  return (
    <Carousel
      data={data || []}
      isLoading={loading}
      LoadingComponent={<CarouselCardSkeleton />}
      renderItem={(item) => (
        <CarouselCard
          key={item.id}
          title={item.title}
          imageUrl={item.image}
          onClick={() => navigateToProgram(item)}
        />
      )}
      onFocusedPress={navigateToProgram}
      ErrorComponent={
        <div>
          <p
            style={{
              color: '#606060',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {error || 'An unkonwn error occured. Please try again later.'}
          </p>
        </div>
      }
      isError={!!error}
    />
  );
};

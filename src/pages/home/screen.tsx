import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { Carousel } from '../../components/Carousel/Carousel';
import {
  CarouselCard,
  CarouselCardSkeleton,
} from '../../components/CarouselCard';
import { useNavigate } from 'react-router-dom';
import { ProgramType } from '../../types/Program';
import { Error } from '../../components/Error';

export const Home = () => {
  const { data, loading, error } = useQuery<ProgramType[]>({
    apiUrl: '/data.json',
  });

  const navigate = useNavigate();

  const navigateToProgram = (item: ProgramType) => {
    navigate(`/program/${item.id}`, { state: item });
  };

  if (error) {
    return <Error testID="home-error" errorMessage={error} />;
  }

  return (
    <Carousel
      testID="home"
      data={data || []}
      isLoading={loading}
      LoadingComponent={<CarouselCardSkeleton testID="home-loading" />}
      renderItem={(item) => (
        <CarouselCard
          key={item.id}
          title={item.title}
          imageUrl={item.image}
          onClick={() => navigateToProgram(item)}
        />
      )}
      onFocusedEnterPress={navigateToProgram}
    />
  );
};

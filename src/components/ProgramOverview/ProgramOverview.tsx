import React, { useEffect } from 'react';
import { CarouselCardSkeleton, CarouselCard } from '../CarouselCard';
import { ProgramDetails } from '../ProgramDetails';
import { Error } from '../Error';
import { ProgramType } from '../../types/Program';

export type ProgramOverViewProps = {
  testID?: string;
  loading: boolean;
  programData: ProgramType | undefined;
  goBack: () => void;
  errorMessage?: string;
  error?: boolean;
};

export const ProgramOverview = ({
  testID,
  loading,
  programData,
  error,
  errorMessage,
  goBack,
}: ProgramOverViewProps) => {
  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace') {
        goBack();
      }
    });
  }, []);

  if (error || (!programData && !loading)) {
    return <Error testID={`${testID}-error`} errorMessage={errorMessage} />;
  }

  return (
    <div
      data-testid={testID}
      style={{
        display: 'flex',
        gap: '3rem',
      }}
    >
      {loading ? (
        <CarouselCardSkeleton testID={`${testID}-card-loading`} />
      ) : (
        <CarouselCard
          testID={`${testID}-carousel-card`}
          imageUrl={programData?.image || ''}
          title={programData?.image || ''}
        />
      )}

      <ProgramDetails
        testID={`${testID}-program-details`}
        description={programData?.description || ''}
        rating={programData?.rating || ''}
        year={programData?.year || 0}
        genre={programData?.genre || ''}
        language={programData?.language || ''}
        title={programData?.title || ''}
        isLoading={loading}
      />
    </div>
  );
};

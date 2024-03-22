import React, { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { ProgramType } from '../../types/Program';
import { ProgramOverview } from '../../components/ProgramOverview';

export const Program = () => {
  const params = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const routerProps = location.state as ProgramType | null;

  const { data, loading, error } = useQuery<ProgramType[]>({
    apiUrl: '/data.json',
    skip: !!routerProps?.id,
  });

  const programData = useMemo(() => {
    if (routerProps?.id) {
      return routerProps;
    }
    return data?.find((program) => program.id === Number(params.id));
  }, [data]);

  const handleGoBack = () => {
    navigation('..');
  };

  return (
    <ProgramOverview
      testID="program-overview"
      loading={loading}
      programData={programData}
      goBack={handleGoBack}
      error={!!error}
      errorMessage={error}
    />
  );
};

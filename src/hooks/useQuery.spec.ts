import { renderHook, waitFor } from '@testing-library/react';
import { useQuery } from './useQuery';

const MOCK_PRICES = { data: 'test data' };

const apiUrl = 'https://example.com/data';

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_PRICES),
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: 'OK',
      type: 'basic',
      url: apiUrl,
    }) as Promise<Response>,
);

describe('useQuery', () => {
  it('fetches data and handles loading state', async () => {
    const { result } = renderHook(() => useQuery({ apiUrl, skip: false }));

    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual({ data: 'test data' });
    expect(result.current.error).toBe('');
  });

  it('handles error state', async () => {
    (fetch as any).mockImplementationOnce(() => Promise.reject());

    const { result } = renderHook(() => useQuery({ apiUrl, skip: false }));

    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBe(
      'An unknown error occurred. please try again later.',
    );
  });
});

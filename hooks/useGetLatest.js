import { useCallback, useRef } from 'react';

const useGetLatest = value => {
  const ref = useRef();
  ref.current = value;

  return useCallback(() => ref.current, []);
};

export default useGetLatest;

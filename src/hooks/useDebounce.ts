import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [result, setResult] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setResult(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return result;
}

export default useDebounce;
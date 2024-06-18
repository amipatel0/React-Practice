import { useRef, useEffect } from 'react';

const PreviousUse = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default PreviousUse;

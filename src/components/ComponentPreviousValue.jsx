import React, { useState } from 'react';
import PreviousUse from './PreviousUse';

const ComponentPreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCount = PreviousUse(count);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ComponentPreviousValue;

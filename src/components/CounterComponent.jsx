import React from 'react';
import CounterUse from './CounterUse';

const ComponentCounter = () => {
  const { count, increment, decrement, reset } = CounterUse(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>&nbsp;&nbsp;
    </div>
  );
};

export default ComponentCounter;

import React, { useState, useMemo } from 'react';

function ExpensiveComputationComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {} // Simulating expensive calculation
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default ExpensiveComputationComponent;

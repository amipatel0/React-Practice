import React, { useState } from 'react';
import useDebounce from './useDebounce';

const DebouncedInputComponent = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Text: {debouncedText}</p>
    </div>
  );
};

export default DebouncedInputComponent;

import React from 'react';
import ToggleUse from './ToggleUse';

const ComponentExample2 = () => {
  const [isToggled, toggle] = ToggleUse();

  return (
    <div>
      <button onClick={toggle}>
        {isToggled ? 'Turn Off' : 'Turn On'}
      </button>
      <p>The toggle is {isToggled ? 'On' : 'Off'}</p>
    </div>
  );
};

export default ComponentExample2;

import React, { useState, useEffect } from 'react';

const MouseEventHooks = () => {
  const [x, setX] = useState(0);
  const [y,setY]=useState(0);

  const MouseMove = event => {
      setX( event.clientX),
      setY( event.clientY)

  };

  useEffect(() => {
    window.addEventListener('mousemove', MouseMove);

    return () => {
      window.removeEventListener('mousemove',MouseMove);
    };
  }, [])

  return (
    <div>
      <p>Mouse coordinates using hooks: (x: {x}, y: {y})</p>
    </div>
  );
};

export default MouseEventHooks;



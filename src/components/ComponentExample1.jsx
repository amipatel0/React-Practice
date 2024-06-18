import React from 'react';
import StorageUser from './StorageUser';

const ComponentExample1 = () => {
  const [name, setName] = StorageUser('name', 'Ami Patel');

  return (
    <div>
      <h1>Hello, {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default ComponentExample1;

import React from 'react';
import FetchUse from './FetchUse';

const ComponentExample = () => {
  const { data, loading, error } = FetchUse('https://jsonplaceholder.typicode.com/albums');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data From API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ComponentExample;

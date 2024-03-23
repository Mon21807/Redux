import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const items = useSelector(state => state.items);

  return (
    <div>
      <h1>Redux App</h1>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};

export default App;
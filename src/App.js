import React from 'react';

import categories from './categories.json';

import Directory from './components/Directory/Directory.jsx';

const App = () => {
  return <Directory categories={categories} />;
};

// into index
export default App;

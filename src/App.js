import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
    },
    {
      id: 2,
      title: 'jackets',
    },
    {
      id: 3,
      title: 'sneakers',
    },
    {
      id: 4,
      title: 'womens',
    },
    {
      id: 5,
      title: 'mens',
    },
  ];

  return <Directory categories={categories} />;
};

export default App;

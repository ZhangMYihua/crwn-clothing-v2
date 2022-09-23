import './categories.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Shoes',
    },
    {
      id: 3,
      title: 'Jackets',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  const categoriesEl = categories.map(({ title, id }) => (
    <div key={id} className="category-container">
      <div className="background-image"></div>
      {/* <img /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  ));

  return <div className="categories-container">{categoriesEl}</div>;
};

export default App;

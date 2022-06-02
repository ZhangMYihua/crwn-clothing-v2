const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div>
      {categories.map(({ id, title }) => {
        return (
          <div key={id} className="categories-container">
            {/* <img /> */}
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p className="Shop-now">SHOP NOW</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;

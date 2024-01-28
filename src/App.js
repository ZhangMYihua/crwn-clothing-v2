import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      title: "hats",
      id: 2,
    },
    {
      title: "jakets",
      id: 3,
    },
    {
      title: "sneakers",
      id: 4,
    },
    {
      title: "womens",
      id: 5,
    },
    {
      title: "mens",
      id: 6,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

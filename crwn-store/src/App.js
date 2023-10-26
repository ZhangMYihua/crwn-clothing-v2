import React from "react";


function App() {

  const categories = [{
    id: 1,
    title: 'Hats'
  }, 
  {
    id: 2,
    title: 'Shoes'
  },
  {
    id: 3,
    title: 'Jeans'
  },
  {
    id: 4,
    title: 'Womens'
  },
  {
    id: 5,
    title: 'Mens'
  }];

  return (
    <div className="App">
      <div className="categories-container">
        {categories.map(({ id, title }) => (
          <div className="category-container" key={id}>
            {/* <img /> */}
            <div className="text-container">
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>
        ))}
         
      </div>
    </div>
  );
}

export default App;

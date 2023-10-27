import React from "react";
import './styles.scss'
import Category from '../src/components/category-container/Category'
import categoriesData from "./categories-data";

function App() {

  const categories = categoriesData;

  return (
    <div className="App">
      <div className="categories-container">
        {categories.map(({ id, title, imageUrl }) => (
          <Category 
            id={id}
            title={title}
            img={imageUrl}
            key={id}
          />
        ))}
         
      </div>
    </div>
  );
}

export default App;

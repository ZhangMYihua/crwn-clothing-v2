import categories from "./constants/categories"
import "./categories.styles.scss"

const App = () => {

  return (
    <div className="categories-container">

      {categories.map(({title, id})=> {
        return (
          <div className="category-container" key={id}>
            <div className="background-image"/>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shops Now</p>
            </div>
          </div>)
      })}
    </div>
  );
};

export default App;

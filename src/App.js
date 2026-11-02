const App = () => {

 const categories = [
      {
        id: 1,
        title: 'Hat'
      },
      {
        id: 2,
        title: 'Shirt'
      },
      {
        id: 3,
        title: 'Pants'
      },
      {
        id: 4,
        title: 'Jacket'
      },
      {
        id: 5,
        title: 'Socks'
      }
  ]

  return (
    <div className='categories-container'>
      {categories.map(({id, title}) => (
      <div className='category-container'>
        <div className="background-image" />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default App;

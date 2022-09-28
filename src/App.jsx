import './'
const App = () => {
  const categories = [
    { 
      id: 1, 
      title:'' 
    },
    { 
      id: 2,
      title:''
    },
    { 
      id: 3,
       title:''
    }
  ]

  return (
    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div />
        {categories.map(({ title }) => (
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
          ))}
      </div>
    </div>
  );
};
export default App;
import CategoryItems from "../CategoryItem/CatagoryItems"
const HomeDirectory = ({categories}) => {
    
  return (
    <div className='categories-container'>
         
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    
    </div>
  )
}

export default HomeDirectory

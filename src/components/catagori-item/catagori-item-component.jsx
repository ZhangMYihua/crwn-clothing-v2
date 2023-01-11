

// const CatagoriItem=({catagories})=>{
// return(
//     <div className="categories-container">
//     {catagories.map((catagori) => (
//    <Directory
//    catagori={catagori}
//     />
//     ))}
//   </div>
// )
// }
// export default CatagoriItem




const CatagoriItem=({catagori})=>{

  return(
      <div key={catagori.id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${catagori.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{catagori.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
  
  }
  export default CatagoriItem
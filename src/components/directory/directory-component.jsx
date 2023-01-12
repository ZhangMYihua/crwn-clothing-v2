

import CatagoriItem from "../catagori-item/catagori-item-component"



const Directory=({catagories})=>{
return(
    <div className="categories-container">
    {catagories.map((catagori) => (
   <CatagoriItem
   key={catagori.id}
   catagori={catagori}
    />
    ))}
  </div>
)
}
export default Directory
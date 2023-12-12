import React from 'react'
import HomeDirectory from '../../component/Directory/HomeDirectory'
import categories from "../../categories.json"
export const Home = () => {
  return (
    <div>
      
        <HomeDirectory key={categories.id} categories={categories}/>
       
        
    </div>
  )
}

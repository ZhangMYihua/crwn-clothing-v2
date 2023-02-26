import './ShopComponen.scss'
import { useContext } from 'react'
import { ShopItemContext } from '../../Kontext/ShopItemContext.jsx'
import ProductCard from '../../Components/ProductCard/ProductCardComponents.jsx'

function ShopComponent() {
  const { products } = useContext(ShopItemContext)
  return (
    <div className="products-container">
      {products.map((one) => (
        console.log(one),
        <ProductCard key={one.id} product={one} />
      ))}
    </div>
  )
}

export default ShopComponent
